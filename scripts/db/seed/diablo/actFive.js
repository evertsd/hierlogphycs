const { rootSector } = require('./root.js');
const { imageOfKey } = require('./images.js');

const actFiveSector = {
    id: '7cd87102-ab50-4bbf-a16e-8365f370a6b9',
    name: 'Act V',
    image_url: '/diablo/Harrogath.png',
    parent_sector_id: rootSector.id
};

const scrollOfInifuss = {
    id: '08963948-2564-4971-bcb3-ab534ef0276f',
    name: 'Scroll of Inifuss',
    image_url: '/diablo/Scroll-of-Inifuss.png',
    sector_id: actFiveSector.id
};

const pindleskin = {
    id: '66f47d93-9219-4715-85db-2b7b4d6e954b',
    name: 'Pindleskin',
    image_url: '/diablo/Pindleskin.png',
    sector_id: actFiveSector.id
};

const nihlathak = {
    id: '3317bc80-18d4-4b0d-9cf1-d8d4c4bb3332',
    name: 'Nihlathak',
    image_url: '/diablo/Nihlathak.png',
    sector_id: actFiveSector.id
};

const keyOfDestruction = {
    id: '9431514c-137f-4aa9-b1e0-c5ba5610ba54',
    name: 'Key of Destruction',
    image_url: imageOfKey,
    sector_id: actFiveSector.id
};

const baal = {
    id: '6c5f509d-c60e-4aa5-9b10-92dea47b8692',
    name: 'Baal',
    image_url: '/diablo/Baal.png',
    sector_id: actFiveSector.id
};

const actFiveAchievements = [
    scrollOfInifuss,
    pindleskin,
    nihlathak,
    keyOfDestruction,
    baal
];

module.exports = { actFiveAchievements, actFiveSector };
