// Import library functionality
import React, { useState, useEffect } from 'react'
import Head from 'next/head';

// Import custom functionality
import { empty } from '../helpers';
import teams from '../teams';
import keepers from '../keepers';

// Import components
import TeamAccordion from '../components/TeamAccordion';
import { CircularProgress } from '@mui/material';
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

  const fetchCurrent = () => {
    fetch('/api/adp-current')
      .then((res) => {
        res.json()
          .then((data) => setCurrentData(data.players));
      })
  }

  const fetchPrevious = () => {
    fetch('/api/adp-previous')
      .then((res) => {
        res.json()
          .then((data) => setPreviousData(data.players));
      })
  }

  const fetchECR = () => {
    fetch('/api/fp-ecr')
      .then((res) => {
        res.json()
          .then((data) => setECR(data));
      })
  }

  const nameForCompare = (name) => {
    return name.replace(' ', '').replace('.', '').replace(`'`, '').toLowerCase();
  }

  const isKeeper = (player) => {
    return !keepers.every((keeper) => nameForCompare(keeper.name) != nameForCompare(player.name));
  }

  const createADPObj = (adp) => {
    let round = 0;
    const roughtRound = (Math.round(adp) / 8)
    if (roughtRound % 1 === 0) {
      round = Math.trunc(roughtRound);
    } else {
      round = Math.trunc(roughtRound + 1);
    }
    return {adp: Math.round(adp), round: round};
  }

  const getADP = (player, keeper = false) => {
    const data = keeper ? previousData : currentData;
    let playerData = data.filter((prevPlayer) => nameForCompare(prevPlayer.name) == nameForCompare(player.name));
    return !empty(playerData) ? createADPObj(playerData[0].adp) : {apd: null, round: null};
  }

  const createECRObj = (ecr) => {
    let round = 0;
    const roughtRound = (Math.round(ecr) / 8)
    if (roughtRound % 1 === 0) {
      round = Math.trunc(roughtRound);
    } else {
      round = Math.trunc(roughtRound + 1);
    }
    return {ecr: Math.round(ecr), round: round};
  }

  const getECR = (player) => {
    let playerData = ecrData.filter((prevPlayer) => nameForCompare(prevPlayer.name) == nameForCompare(player.name));
    return !empty(playerData) ? createECRObj(playerData[0].ecr) : {ecr: null, round: null};
  }

  const getValueRound = (adp, ecr) => {
    let round = 0;
    const roughtRound = (Math.round(((adp.adp + ecr.ecr) / 2)) / 8)
    if (roughtRound % 1 === 0) {
      round = Math.trunc(roughtRound);
    } else {
      round = Math.trunc(roughtRound + 1);
    }
    return {round: round, rank: ((adp.adp + ecr.ecr) / 2)}
  }

  const setTeams = () => {
    const tempTeamState = [];
    teams.forEach((team) => {
      const players = []
      team.players.forEach((player) => {
        players.push({...player, adp: getADP(player), ecr: getECR(player), valueRound: getValueRound(getADP(player), getECR(player)), round: isKeeper(player) ? getADP(player, true).round : player.round});
      })
      team = {...team, players: players};
      tempTeamState.push(team);
    })
    setTeamState(tempTeamState.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }));
  }

  const calculateValues = () => {
    const teamValues = [];
    teamState.forEach((team) => {
      const playerValues = [];
      team.players.forEach((player) => {
        const round = !empty(player.round) ? player.round : 10;
        let posStrength;
        switch (player.position) {
          case 'QB':
            posStrength = 0.4;
            break;
          case 'WR':
            posStrength = 0.75;
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
        playerValues.push({name: player.name, value: calculateScore(), adp: player.adp.adp, adpRound: player.adp.round, ecr: player.ecr.ecr, ecrRound: player.ecr.round, valueRound: player.valueRound.round, draftRound: round, keeper: isKeeper(player)});
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
      setTimeout(() => {
        calculateValues();
      }, 2500);
    }
  })

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
      <h1>Tummy Sleeper's <span>Keepers</span></h1>
      <p>The most accurate algorithmically generated keeper predictions for the Hateful 8 on the planet!</p>
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
