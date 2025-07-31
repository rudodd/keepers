// Import library functionality
import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import Router from 'next/router';

// Import custom functionality and variables
import { usePlayers } from '../utils/hooks/usePlayers';
import { useData } from '../utils/hooks/useData';
import { empty, getMetric, getValueRound, isKeeper,  } from '../utils/helpers';
import teams from '../teams';


// Import components
import CircularProgress from '@mui/material/CircularProgress';
import TeamAccordion from '../components/TeamAccordion';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [teamState, setTeamState] = useState([]);
  const [valuesArray, setValuesArray] = useState([])
  const [expanded, setExpanded] = useState(false);
  const { currentData, previousData, ecrData } = useData();
  const players = usePlayers();

  // Build the array of team data to use for analysis
  const setTeams = () => {
    const tempTeamState = [];
    teams.forEach((team) => {
      const teamPlayers = [];
      players.filter((player) => player.owner === team.name).forEach((player) => {
        teamPlayers.push({
          ...player,
          adp: getMetric(previousData, currentData, ecrData, player, 'adp'),
          ecr: getMetric(previousData, currentData, ecrData, player, 'ecr'),
          valueRound: getValueRound(getMetric(previousData, currentData, ecrData, player, 'adp'), getMetric(previousData, currentData, ecrData, player, 'ecr')),
          round: isKeeper(player) ? getMetric(previousData, currentData, ecrData, player, 'adp', true).round : player.round
        });
      })
      team = {...team, players: teamPlayers};
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
    if (!empty(currentData) && !empty(previousData) && !empty(ecrData) && !empty(players)) {
      setTeams();
    }
  }, [currentData, previousData, ecrData, players])

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
