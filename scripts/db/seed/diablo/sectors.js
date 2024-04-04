const { actOneSector } = require('./actOne.js');
const { actTwoSector } = require('./actTwo.js');
const { rootSector } = require('./root.js');

const diabloSectors = [rootSector, actOneSector, actTwoSector];

module.exports = { diabloSectors, rootSector };