// Import library functionality
import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Router from 'next/router';

// Import custom functionality and variables
import { empty } from '../helpers';
import teams from '../teams';
import keepers from '../keepers';

// Import components
import CircularProgress from '@mui/material/CircularProgress';
import TeamAccordion from '../components/TeamAccordion';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [currentData, setCurrentData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const [ecrData, setECR] = useState(null);
  const [teamState, setTeamState] = useState([]);
  const [valuesArray, setValuesArray] = useState([])
  const [expanded, setExpanded] = useState(false);

  // Fetch the current ADP for all players
  const fetchCurrent = () => {
    fetch('/api/adp-current')
      .then((res) => {
        res.json()
          .then((data) => setCurrentData(data.players));
      })
  }

  // Fetch last year's ADP for all players
  const fetchPrevious = () => {
    fetch('/api/adp-previous')
      .then((res) => {
        res.json()
          .then((data) => setPreviousData(data.players));
      })
  }

  // Fetch current ECR for all players
  const fetchECR = () => {
    fetch('/api/fp-ecr')
      .then((res) => {
        res.json()
          .then((data) => setECR(data));
      })
  }

  // Helper to convert names to a uniform lowercase string for comparison
  const nameForCompare = (name) => {
    return name.replaceAll(' II', '').replaceAll('III', '').replaceAll(' Jr.', '').replaceAll(' Sr.', '').replaceAll(' ', '').replaceAll('.', '').replaceAll(`'`, '').toLowerCase();
  }

  // Helper to check is a player was a keeper last year
  const isKeeper = (player) => {
    return !keepers.every((keeper) => nameForCompare(keeper.name) != nameForCompare(player.name));
  }

  // Helper to convert ADP/ECR into an object with ADP/ECR and round based on ADP/ECR
  const createMetricObj = (metric, metricName) => {
    let round = 0;
    const roughRound = (Math.round(metric) / 8)
    if (roughRound % 1 === 0) {
      round = Math.trunc(roughRound);
    } else {
      round = Math.trunc(roughRound + 1);
    }
    return {[metricName]: Math.round(metric), round: round};
  }

  // Helper to get the ADP object for a given player
  const getMetric = (player, metricName, keeper = false) => {
    const data = metricName === 'adp' && keeper ? previousData : currentData;
    let playerData = [];
    if (metricName === 'adp') {
      playerData = data.filter((prevPlayer) =>  nameForCompare(prevPlayer.name) == nameForCompare(player.name));
    } else if (metricName === 'ecr') {
      playerData = ecrData.filter((prevPlayer) => nameForCompare(prevPlayer.name) == nameForCompare(player.name));
    }
    return !empty(playerData) && metricName === 'adp' ? createMetricObj(playerData[0].adp, 'adp') 
      :  !empty(playerData) && metricName === 'ecr' ? createMetricObj(playerData[0].ecr, 'ecr') 
      : {adp: null, round: null};
  }

  // Helper to calculate the round at which a player is valued based on ADP and ECR
  const getValueRound = (adp, ecr) => {
    let round = 0;
    const roughtRound = !empty(ecr.ecr) ? (Math.round(((adp.adp + ecr.ecr) / 2)) / 8) : Math.round(adp.adp) / 8;
    if (roughtRound % 1 === 0) {
      round = Math.trunc(roughtRound);
    } else {
      round = Math.trunc(roughtRound + 1);
    }
    return {round: round, rank: ((adp.adp + ecr.ecr) / 2)}
  }

  // Build the array of team data to use for analysis
  const setTeams = () => {
    const tempTeamState = [];
    teams.forEach((team) => {
      const players = []
      team.players.forEach((player) => {
        players.push({
          ...player, 
          adp: getMetric(player, 'adp'), 
          ecr: getMetric(player, 'ecr'), 
          valueRound: getValueRound(getMetric(player, 'adp'), getMetric(player, 'ecr')), 
          round: isKeeper(player) ? getMetric(player, 'adp', true).round : player.round
        });
      })
      team = {...team, players: players};
      tempTeamState.push(team);
    })
    setTeamState(tempTeamState.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }));
  }

  // Calculate the player values and push the full player data to the team array for display
  const calculateValues = () => {
    const teamValues = [];
    teamState.forEach((team) => {
      const playerValues = [];
      team.players.forEach((player) => {
        const round = !empty(player.round) ? player.round : 10;
        let posStrength;
        switch (player.position) {
          case 'QB':
            posStrength = 0.5;
            break;
          case 'WR':
            posStrength = 0.8;
            break;
          case 'RB':
            posStrength = 1;
            break;
          case 'TE':
            posStrength = 0.5;
            break;
          default:
            posStrength = 0;
        }

        // Helper to calculate the player's score
        const calculateScore = () => {
          if (!empty(player.valueRound.round) && round != 1 && round != 2) {
            if ((round - player.valueRound.round) * posStrength > 0) {
              return Number((((round - player.valueRound.round) * posStrength) / player.valueRound.rank) * 10).toFixed(2);
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        }
        playerValues.push({
          name: player.name, 
          value: calculateScore(), 
          adp: player.adp.adp, 
          adpRound: player.adp.round, 
          ecr: player.ecr.ecr, 
          ecrRound: player.ecr.round, 
          valueRound: player.valueRound.round, 
          draftRound: round, 
          keeper: isKeeper(player)
        });
      })
      teamValues.push({name: team.name, players: playerValues.sort((a,b) => b.value - a.value)})
    })
    setValuesArray(teamValues);
  }

  useEffect(() => {
    if (empty(currentData)) {
      fetchCurrent();
    }
    if (empty(previousData)) {
      fetchPrevious();
    }
    if (empty(ecrData)) {
      fetchECR();
    }
  }, []);

  useEffect(() => {
    if (!empty(currentData) && !empty(previousData) && !empty(ecrData)) {
      setTeams();
    }
  }, [currentData, previousData, ecrData])

  useEffect(() => {
    if (!empty(teamState)) {
      setTimeout(() => { // Use setTimeout to avoid flashing if fetch calls return too fast
        calculateValues();
      }, 500);
    }
  }, [teamState])

  useEffect(() => {
    if (!empty(valuesArray)) {
      setLoading(false);
    }
  }, [valuesArray])

  return (
    <div className="app-container">
      <Head>
        <title>Tummy Sleeper's Keepers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Tummy Sleeper's <span>Keepers</span><button onClick={() => Router.push('/faq')}>FAQs</button></h1>
      <p>The most accurate algorithmically generated keeper predictions for the Hateful 8 on the planet!  <strong>Predictions, not recommendations.</strong></p>
      {loading &&
        <div className="loading-container">
          <h3>Crunching the numbers...</h3>
          <div><CircularProgress /></div>
        </div>
      }
      {!empty(valuesArray) &&
        <div className="team-container">
          <button className="expand-button" onClick={() => setExpanded(!expanded)}>
            {!expanded && 
              <>
                <UnfoldMoreIcon sx={{ width: 16, height: 16}} /> Expand all
              </>
            }
            {expanded && 
              <>
                <UnfoldLessIcon sx={{ width: 16, height: 16}} /> Collapse all
              </>
            }
          </button>
          {valuesArray.map((team, key) => (
            <TeamAccordion key={`${team.name}-${key}`} team={team} expanded={expanded} />
          ))}
        </div>
      }
    </div>
  )
}
