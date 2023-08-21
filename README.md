# Keepers

Keepers is a simple predictive model that tries to predict which player that each team in my fantasy football league will choose to keep for the next season.

The league's rule is that a team can keep one player from the previous year at the round at which they drafted the player, with the excpetion that if the player was kept the previous year they have to keep the player at the previous year's ADP (average draft position) versus the round in which they kept them.  

For each player on each team, the model compares the round at which a player could be kept versus where they are projected to be drafted this year (determined by the average of ADP [average draft position] and ECR [expert consensus ranking]).  This comparison "score" is then weighted by position and the player's overall rank for the upcoming draft to ensure that top players in more valuable positions are rated higher.  The top two options are shown for each team, with a confidence score that is based on how close the two score were, meaning that the bigger the difference in the score the easier the choice is likely to be and the higher the confidence that the top option will be the selected keeper.

Unfortunately, this is not a plug and play app given that leagues have different keeper rules and it requires an object of your league's team data.  To use it, you will have to modify the code to fit your league, but feel free to pull down and branch off for your own use.

## Features
- Shows top two keepers for each team
- Displays the round at which a player could be kept and the players ADP and ECR values
- Highlights the best keeper option
- Displays a confidence in the pick based on how close the two top options score

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It uses minimal additional npm packages, but those used are as follows:
- [MUI (Material UI)](https://mui.com/material-ui/getting-started/) - Used for UI components / general styling
- [SASS](https://www.npmjs.com/package/sass) - Used for SCSS integration
- [Cheerio](https://www.npmjs.com/package/cheerio) - Used to parse the HTML from fatasypros.com to get ECR values

To run the development server:

```bash
npm ci
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.