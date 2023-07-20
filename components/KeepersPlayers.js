// Import library functionality
import React from 'react';

// Import components
import CheckIcon from '@mui/icons-material/Check';

export default function KeepersPlayers (props) {

  const { players } = props;

  return (
    <div className="team-container">
      <div className="keeper-container">
        {players.map((player, index) => {
          if (index === 0) {
            const score = 100 - (Math.round((players[1].value / players[0].value) * 100));
            const scoreColor = score > 84 ? 'green' : score > 64 ? 'green-orange' : score > 44 ? 'orange' : 'red';
            return (
              <div className="player" key={player.adp}>
                <div className="best">
                  <div className="icon"><CheckIcon sx={{ fontSize: 18 }} /></div> <strong>Best option</strong>
                  <div className="confidence">
                    <strong>Confidence:</strong>
                    <div className={`score ${scoreColor}`}>{score}%</div>
                  </div>
                </div>
                <div className="player-info">
                  <div><h3>{player.name}</h3></div>
                  <div><strong>Keep at round:</strong> {player.keeper ? `${player.draftRound} (Keeper)` : player.draftRound}</div>
                  <div><strong>Valued at Round:</strong> {player.valueRound}</div>
                  <div className="stat-table">
                    <table cellPadding={0} cellSpacing={0}>
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>ADP</th>
                          <th>ECR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Rank</th>
                          <td>{player.adp}</td>
                          <td>{player.ecr}</td>
                        </tr>
                        <tr>                      
                          <th>Round</th>
                          <td>{player.adpRound}</td>
                          <td>{player.ecrRound}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          } else if (index === 1) {
            return (
              <div className="player" key={player.adp}>
                <div className="best"><strong>Next best option</strong></div>
                <div className="player-info">
                  <div><h3>{player.name}</h3></div>
                  <div><strong>Keep at round:</strong> {player.keeper ? `${player.draftRound} (Keeper)` : player.draftRound}</div>
                  <div><strong>Valued at round:</strong> {player.valueRound}</div>
                  <div className="stat-table">
                    <table cellPadding={0} cellSpacing={0}>
                      <thead>
                        <tr>
                          <th>&nbsp;</th>
                          <th>ADP</th>
                          <th>ECR</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Rank</th>
                          <td>{player.adp}</td>
                          <td>{player.ecr}</td>
                        </tr>
                        <tr>                      
                          <th>Round</th>
                          <td>{player.adpRound}</td>
                          <td>{player.ecrRound}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}