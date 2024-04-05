const { actOneAchievements } = require('./actOne.js');
const { actTwoAchievements } = require('./actTwo.js');
const { actThreeAchievements } = require('./actThree.js');
const { actFourAchievements } = require('./actFour.js');
const { actFiveAchievements } = require('./actFive.js');
const { runeAchievements } = require('./runes.js');
const { lootAchievements } = require('./loot.js');
const { torchAchievements } = require('./torch.js');

const diabloAchievements = []
    .concat(actOneAchievements)
    .concat(actTwoAchievements)
    .concat(actThreeAchievements)
    .concat(actFourAchievements)
    .concat(actFiveAchievements)
    .concat(runeAchievements)
    .concat(lootAchievements)
    .concat(torchAchievements);

module.exports = { diabloAchievements };