// Scrape fantasy pros for current ECR values
export default function handler(req, res) {
  return fetch('https://www.fantasypros.com/nfl/rankings/ppr-cheatsheets.php')
    .then((response) => {
      if (response.ok) {
        return response.text()
          .then((text) => {
            const variableName = 'ecrData';
            const regex = new RegExp(`(?:var|let|const)\\s+${variableName}\\s*=\\s*(.*?);`);
            const playersData = text.match(regex);
            const players = JSON.parse(playersData[1]).players.map((player) => ({
              ecr: player.rank_ecr,
              name: player.player_name,
              position: player.player_positions
            }));
            return res.status(200).json(players);
          })
      } else {
        return res.status(response.status).json(response)
      }
    })
}