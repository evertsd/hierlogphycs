const { actOne } = require('./sectors.js');
const { imageOfAndariel, imageOfKey } = require('./images.js');

const denOfEvil = {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Den of Evil',
    image_url: 'https://www.diablo-2.net/images/quests/act1/Act1-Quest-1-Den-of-Evil.gif',
    sector_id: actOne.id
};

const tristram = {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Tristram',
    image_url: 'https://www.diablo-2.net/images/quests/act1/Act1-Quest-3-Search-for-Cain.gif',
    sector_id: actOne.id
};

const countess = {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Countess',
    image_url: 'https://www.diablo-2.net/images/quests/act1/Act1-Quest-4-The-Forgotten-Tower.gif',
    sector_id: actOne.id
};

const keyOfTerror = {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Key of Terror',
    image_url: imageOfKey,
    sector_id: actOne.id
};

const andariel = {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Andariel',
    image_url: imageOfAndariel,
    sector_id: actOne.id
};

const diabloAchievements = [denOfEvil, tristram, countess, keyOfTerror, andariel];

module.exports = { diabloAchievements };
