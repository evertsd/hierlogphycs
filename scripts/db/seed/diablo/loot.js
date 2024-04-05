const { rootSector } = require('./root.js');

const lootSector = {
    id: 'a35bb672-d9fa-4a5c-954b-9460bdb34367',
    name: 'Loot',
    image_url: '/diablo/Treasure-Goblin.png',
    parent_sector_id: rootSector.id
};

const setItem = {
    id: '73299862-026a-47c2-bbe6-f3a2d9103571',
    name: 'Set Item',
    image_url: '/diablo/Set-Text.png',
    sector_id: lootSector.id
};

const uniqueItem = {
    id: 'd518e37f-ed3b-433d-8907-5e6282215fc6',
    name: 'Unique Item',
    image_url: '/diablo/Unique-Text.png',
    sector_id: lootSector.id
};

const ring = {
    id: '40720392-68db-43e1-8132-83466528c6d3',
    name: 'Ring',
    image_url: '/diablo/Ring.png',
    sector_id: lootSector.id
};

const lootAchievements = [
    setItem,
    uniqueItem,
    ring
];

module.exports = { lootAchievements, lootSector };
