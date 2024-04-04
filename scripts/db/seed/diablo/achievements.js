const { actOneAchievements } = require('./actOne.js');
const { actTwoAchievements } = require('./actTwo.js');

const diabloAchievements = []
    .concat(actOneAchievements)
    .concat(actTwoAchievements);

module.exports = { diabloAchievements };