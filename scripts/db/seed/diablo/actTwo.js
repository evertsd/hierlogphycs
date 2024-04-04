const { rootSector } = require('./root.js');
const { imageOfKey } = require('./images.js');

const actTwoSector = {
    id: '6072610c-3ea1-4542-a5ca-be6cb161f518',
    name: 'Act II',
    image_url: '/diablo/Lut-Gholein.png',
    parent_sector_id: rootSector.id
};

const radament = {
    id: '0e46734c-5839-43de-8c48-396fd8551668',
    name: 'Radament',
    image_url: '/diablo/Radament.png',
    sector_id: actTwoSector.id
};

const horadricCube = {
    id: '2aeef611-17a5-45ae-9a3b-e1915223c90c',
    name: 'Horadric Cube',
    image_url: '/diablo/Horadric-Cube.png',
    sector_id: actTwoSector.id
};

const summoner = {
    id: 'af7f8faf-91c7-4561-b20a-1dce9491eead',
    name: 'Summoner',
    image_url: '/diablo/Summoner.png',
    sector_id: actTwoSector.id
};

const keyOfHate = {
    id: 'b4fb784f-88d6-4630-add1-74ba6cb70b4e',
    name: 'Key of Hate',
    image_url: imageOfKey,
    sector_id: actTwoSector.id
};

const duriel = {
    id: 'dc652ff6-032b-48ed-9a00-4101890f75f8',
    name: 'Duriel',
    image_url: '/diablo/Duriel.png',
    sector_id: actTwoSector.id
};

const actTwoAchievements = [
    radament,
    horadricCube,
    summoner,
    keyOfHate,
    duriel
];

module.exports = { actTwoAchievements, actTwoSector };
