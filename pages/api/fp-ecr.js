// ES6 or TypeScript:
import * as cheerio from 'cheerio';

export default function handler(req, res) {
  fetch('https://www.fantasypros.com/nfl/cheatsheets/top-ppr-players.php')
    .then((response) => {
      if (response.ok) {
        response.text()
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
            res.status(200).json(players);
            // res.status(200).json(text)
          })
      } else {
        res.status(response.status).json(response)
      }
    })
}