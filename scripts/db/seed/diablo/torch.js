const { rootSector } = require('./root.js');

const torchSector = {
    id: '480f55a5-c953-4861-9c42-5727c3e529fc',
    name: 'Tristram',
    image_url: '/diablo/Tristram.png',
    parent_sector_id: rootSector.id
};

const brain = {
    id: 'fa1cfd8d-e4b0-4429-b190-f36320315d99',
    name: 'Brain',
    image_url: '/diablo/Brain.png',
    sector_id: torchSector.id
};

const eye = {
    id: 'b71d6198-04d9-485e-8193-614dc183a689',
    name: 'Eye',
    image_url: '/diablo/Eye.png',
    sector_id: torchSector.id
};

const horn = {
    id: 'bf2bef46-45d2-47cc-af6f-64f9276b9a29',
    name: 'Horn',
    image_url: '/diablo/Horn.png',
    sector_id: torchSector.id
};

const torch = {
    id: '3a84675d-5f18-4a75-9e31-d9f6821d82b4',
    name: 'Torch',
    image_url: '/diablo/Hellfiretorch.png',
    sector_id: torchSector.id
};

const torchAchievements = [
    brain,
    eye,
    horn,
    torch
];

module.exports = { torchAchievements, torchSector };
