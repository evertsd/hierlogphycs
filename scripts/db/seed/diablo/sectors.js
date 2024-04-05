const { actOneSector } = require('./actOne.js');
const { actTwoSector } = require('./actTwo.js');
const { actThreeSector } = require('./actThree.js');
const { actFourSector } = require('./actFour.js');
const { actFiveSector } = require('./actFive.js');
const { runeSector } = require('./runes.js');
const { rootSector } = require('./root.js');
const { lootSector } = require('./loot.js');
const { torchSector } = require('./torch.js');

const diabloSectors = [
    rootSector,
    actOneSector,
    actTwoSector,
    actThreeSector,
    actFourSector,
    actFiveSector,
    runeSector,
    lootSector,
    torchSector
];

module.exports = { diabloSectors, rootSector };