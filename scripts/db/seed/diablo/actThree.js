const { rootSector } = require('./root.js');

const actThreeSector = {
    id: '8824ba4a-b811-404b-85ec-67f70d20fb50',
    name: 'Act III',
    image_url: '/diablo/Kurast-Docks.png',
    parent_sector_id: rootSector.id
};

const potionOfLife = {
    id: '28f4103e-739c-4b82-9d50-b1e7123666a9',
    name: 'Potion of Life',
    image_url: '/diablo/Potion-of-Life.png',
    sector_id: actThreeSector.id
};

const lamEsensTome = {
    id: 'c687ab38-4034-48c2-8b1d-2ff18e95032a',
    name: `Lam Esen's Tome`,
    image_url: '/diablo/Lam-Esens-Tome.png',
    sector_id: actThreeSector.id
};

const travincal = {
    id: '47c1d5b7-ae34-4285-b302-940ed5b97bbf',
    name: 'Travincal',
    image_url: '/diablo/Council-Member.png',
    sector_id: actThreeSector.id
};

const mephisto = {
    id: '486effdd-4ef3-40ed-82f5-6f0ead27b2f6',
    name: 'Mephisto',
    image_url: '/diablo/Mephisto.png',
    sector_id: actThreeSector.id
};

const actThreeAchievements = [
    potionOfLife,
    lamEsensTome,
    travincal,
    mephisto
];

module.exports = { actThreeAchievements, actThreeSector };
