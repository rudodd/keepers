import React, { useState, useEffect } from 'react'
import Head from 'next/head';
import { empty } from '../helpers';
import teams from '../teams';
import keepers from '../keepers';

export default function Home() {

  const [currentData, setCurrentData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const [teamState, setTeamState] = useState([]);
  const [valuesArray, setValuesArray] = useState([])

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

  const setTeams = () => {
    const tempTeamState = [];
    teams.forEach((team) => {
      const players = []
      team.players.forEach((player) => {
        players.push({...player, adp: getADP(player), round: isKeeper(player) ? getADP(player, true).round : player.round});
      })
      team = {...team, players: players};
      tempTeamState.push(team);
    })
    setTeamState(tempTeamState);
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
            posStrength = 0.35;
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
          if (!empty(player.adp.round)) {
            if ((round - player.adp.round) * posStrength > 0) {
              return Number((((round - player.adp.round) * posStrength) / player.adp.adp) * 10).toFixed(2);
            } else {
              return 0;
            }
          } else {
            return 0;
          }
        }
        playerValues.push({name: player.name, value: calculateScore(), adp: player.adp.adp, adpRound: player.adp.round, draftRound: player.round, keeper: isKeeper(player)});
      })
      teamValues.push({name: team.name, players: playerValues.sort((a,b) => b.value - a.value)})
    })
    setValuesArray(teamValues);
  }

  useEffect(() => {
    if (empty(currentData)) {
      fetchCurrent();
      console.log('fetch current called');
    }
    if (empty(previousData)) {
      fetchPrevious();
      console.log('fetch previous called');
    }
  }, []);

  useEffect(() => {
    console.log(currentData);
  }, [currentData])

  useEffect(() => {
    console.log(teams);
  }, [teams])

  useEffect(() => {
    console.log(teamState);
    calculateValues();
  }, [teamState])

  useEffect(() => {
    console.log(valuesArray)
  }, [valuesArray])

  return (
    <div className="app-container">
      <Head>
        <title>Tummy Sleeper's Keepers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Tummy Sleeper's Keepers</h1>
      <p>The most accurate algorithmically generated keeper predictions for the Hateful 8 on the planet!</p>
      <button onClick={() => setTeams()}>Get Keepers</button>
      {!empty(valuesArray) &&
        <>
          {valuesArray.map((team) => (
            <div className="team-container">
              <h3>{team.name}</h3>
              <div className="keeper-container">
                <div className="player">
                  <div className="name"><strong>Name</strong></div>
                  <div className="round"><strong>Draft round</strong></div>
                  <div className="adp"><strong>ADP / ADP Round</strong></div>
                </div>
                {team.players.map((player, index) => {
                  if (index === 0) {
                    return (
                      <div className="player">
                        <div className="name">1. {player.name}</div>
                        <div className="round">{player.keeper ? `${player.draftRound} (Keeper)` : player.draftRound}</div>
                        <div className="adp">{player.adp} / {player.adpRound}</div>
                        <div className="confidence">Confidence: {Math.round((team.players[1].value / team.players[0].value) * 100)}%</div>
                      </div>
                    )
                  } else if (index === 1) {
                    return (
                      <div className="player">
                        <div className="name">2. {player.name}</div>
                        <div className="round">{player.keeper ? `${player.draftRound} (Keeper)` : player.draftRound}</div>
                        <div className="adp">{player.adp} / {player.adpRound}</div>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
          ))}
        </>
      }
    </div>
  )
}
