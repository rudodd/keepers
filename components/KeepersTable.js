// Import library functionality
import React from 'react';

// Import custom functionality

export default function KeepersTable (props) {

  const { players } = props;

  return (
    <div className="team-container">
      <div className="keeper-container">
        <div className="player">
          <div className="name"><strong>Name</strong></div>
          <div className="round"><strong>Draft round</strong></div>
          <div className="adp"><strong>ADP / ADP Round</strong></div>
        </div>
        {players.map((player, index) => {
          if (index === 0) {
            return (
              <div className="player">
                <div className="name">1. {player.name}</div>
                <div className="round">{player.keeper ? `${player.draftRound} (Keeper)` : player.draftRound}</div>
                <div className="adp">{player.adp} / {player.adpRound}</div>
                <div className="confidence">Confidence: {100 - (Math.round((players[1].value / players[0].value) * 100))}%</div>
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
  )
}