const { rootSector } = require('./root.js');

const actFourSector = {
    id: '420c7ae5-fe8e-4d5c-bc5b-4e8d57d89928',
    name: 'Act IV',
    image_url: '/diablo/Pandemonium-Fortress.png',
    parent_sector_id: rootSector.id
};

const izual = {
    id: 'f1a5d76e-ac87-48e8-af04-d4e701c28f96',
    name: 'Izual',
    image_url: '/diablo/Izual.png',
    sector_id: actFourSector.id
};

const hellforgeHammer = {
    id: '512b40c6-5f44-48b6-8053-70400fa729ac',
    name: 'Hellforge Hammer',
    image_url: '/diablo/Hellforge-Hammer.png',
    sector_id: actFourSector.id
};

const diablo = {
    id: 'd406a735-5504-4b67-8838-cf5e13b00db6',
    name: 'Diablo',
    image_url: '/diablo/Diablo.png',
    sector_id: actFourSector.id
};

const actFourAchievements = [
    izual,
    hellforgeHammer,
    diablo
];

module.exports = { actFourAchievements, actFourSector };
