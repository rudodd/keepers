// Import library functionality
import * as cheerio from 'cheerio';

// Scrape fantasy pros for current ECR values
export default function handler(req, res) {
  return fetch('https://www.fantasypros.com/nfl/cheatsheets/top-ppr-players.php')
    .then((response) => {
      if (response.ok) {
        return response.text()
          .then((text) => {
            const $ = cheerio.load(text);
            $.html();
            const players = $('.player-list ul li').map(function(index) {
              const obj = {
                ecr: index + 1,
                name: $(this).find('a:first-of-type').text(),
                position: $(this).find('small').text().split('-')[0]
              }
              return obj;
            }).get();
            return res.status(200).json(players);
          })
      } else {
        return res.status(response.status).json(response)
      }
    })
}