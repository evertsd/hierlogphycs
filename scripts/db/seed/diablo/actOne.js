const { rootSector } = require('./root.js');
const { imageOfKey } = require('./images.js');

const actOneSector = {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Act I',
    image_url: '/diablo/Rogue-Encampment.png',
    parent_sector_id: rootSector.id
};

const denOfEvil = {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Den of Evil',
    image_url: '/diablo/Corpsefire.png',
    sector_id: actOneSector.id
};

const tristram = {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Tristram',
    image_url: '/diablo/Decard-Cain.png',
    sector_id: actOneSector.id
};

const countess = {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Countess',
    image_url: '/diablo/Countess.png',
    sector_id: actOneSector.id
};

const keyOfTerror = {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Key of Terror',
    image_url: imageOfKey,
    sector_id: actOneSector.id
};

const andariel = {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Andariel',
    image_url: '/diablo/Andariel.png',
    sector_id: actOneSector.id
};

const cowKing = {
    id: 'de62cfba-e894-46e5-91ef-2828224127a9',
    name: 'Cow King',
    image_url: '/diablo/CowKing.png',
    sector_id: actOneSector.id
};

const actOneAchievements = [
    denOfEvil,
    tristram,
    countess,
    keyOfTerror,
    andariel,
    cowKing
];

module.exports = { actOneAchievements, actOneSector };
