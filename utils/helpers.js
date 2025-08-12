// import data
import keepers from '../keepers';

// Helper function that returns whether a carriable is empty, null, or undefined
export const empty = (variable) => {

  // check undefined 
  if (typeof variable === 'undefined') {
    return true;
  
  // check for null
  } else if (variable === null) {
    return true;

  // check for empty string
  } else if (typeof variable === 'string' && variable.length === 0){
    return true;

  //check for bad number  
  } else if (typeof variable === 'number' && isNaN(variable)){
    return true;

  //check for empty object 
  } else if (typeof variable === 'object' && Object.keys(variable).length === 0){
    return true;

  //check for empty arrays 
  } else if (Array.isArray(variable) && variable.length === 0){
    return true;

  } else {
    return false;
  }
}

  // Helper to convert names to a uniform lowercase string for comparison
  export const nameForCompare = (name) => {
    return name.replaceAll(' II', '').replaceAll('III', '').replaceAll(' Jr.', '').replaceAll(' Sr.', '').replaceAll(' ', '').replaceAll('.', '').replaceAll(`'`, '').toLowerCase();
  }

  // Helper to check if a player was a keeper last year
  export const isKeeper = (player) => {
    return !keepers.every((keeper) => nameForCompare(keeper.name) != nameForCompare(player.name));
  }

  // Helper to convert ADP/ECR into an object with ADP/ECR and round based on ADP/ECR
  export const createMetricObj = (metric, metricName) => {
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
  export const getMetric = (
    data,
    player,
    isEcr = false
  ) => {
    const playerData = data.filter((prevPlayer) => nameForCompare(prevPlayer.name) == nameForCompare(player.name));
    return !empty(playerData) && !isEcr ? createMetricObj(playerData[0].adp, 'adp') 
      :  !empty(playerData) ? createMetricObj(playerData[0].ecr, 'ecr') 
      : {adp: null, round: null};
  }

  // Helper to calculate the round at which a player is valued based on ADP and ECR
  export const getValueRound = (adp, ecr) => {
    let round = 0;
    const roughRound = !empty(ecr.ecr) ? (Math.round(((adp.adp + ecr.ecr) / 2)) / 8) : !empty(adp.adp) ? Math.round(adp.adp) / 8 : 18;
    if (roughRound % 1 === 0) {
      round = Math.trunc(roughRound);
    } else {
      round = Math.trunc(roughRound + 1);
    }
    return {round: round, rank: ((adp.adp + ecr.ecr) / 2)}
  }