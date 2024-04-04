const { actOneSector } = require('./actOne.js');
const { actTwoSector } = require('./actTwo.js');
const { actThreeSector } = require('./actThree.js');
const { actFourSector } = require('./actFour.js');
const { actFiveSector } = require('./actFive.js');
const { runeSector } = require('./runes.js');
const { rootSector } = require('./root.js');

const diabloSectors = [
    rootSector,
    actOneSector,
    actTwoSector,
    actThreeSector,
    actFourSector,
    actFiveSector,
    runeSector
];

module.exports = { diabloSectors, rootSector };