const { rootSector } = require('./root.js');

const runeSector = {
    id: '2dd2e8c4-7895-4be2-aade-7b72df5edea1',
    name: 'Runes',
    image_url: '/diablo/Zod_Rune.png',
    parent_sector_id: rootSector.id
};

const lemRune = {
    id: '321dad1f-092c-4814-9d07-9de48f99bd38',
    name: 'Lem Rune',
    image_url: '/diablo/Lem_Rune.png',
    sector_id: runeSector.id
};

const pulRune = {
    id: '4345c0b8-39cf-4366-aa4d-da92a08b089a',
    name: 'Pul Rune',
    image_url: '/diablo/Pul_Rune.png',
    sector_id: runeSector.id
};

const umRune = {
    id: 'c5183777-9429-499d-bb93-e4a7fee545c3',
    name: 'Um Rune',
    image_url: '/diablo/Um_Rune.png',
    sector_id: runeSector.id
};

const malRune = {
    id: '3a6b2503-04f8-4bb6-bd0c-a15cf7cbd6ea',
    name: 'Mal Rune',
    image_url: '/diablo/Mal_Rune.png',
    sector_id: runeSector.id
};

const istRune = {
    id: '48df9c98-56aa-4fe6-aa36-f333670d461c',
    name: 'Ist Rune',
    image_url: '/diablo/Ist_Rune.png',
    sector_id: runeSector.id
};

const gulRune = {
    id: '6e421273-0581-4c5d-83a7-8a259269392d',
    name: 'Gul Rune',
    image_url: '/diablo/Gul_Rune.png',
    sector_id: runeSector.id
};

const vexRune = {
    id: 'c1759c88-08d3-49d3-891c-ccc823f3a1c8',
    name: 'Vex Rune',
    image_url: '/diablo/Vex_Rune.png',
    sector_id: runeSector.id
};

const ohmRune = {
    id: '6e2e7221-4fda-4663-9c37-74eb23107dc9',
    name: 'Ohm Rune',
    image_url: '/diablo/Ohm_Rune.png',
    sector_id: runeSector.id
};

const loRune = {
    id: '79af0e79-8958-4ea5-951c-a97244005132',
    name: 'Lo Rune',
    image_url: '/diablo/Lo_Rune.png',
    sector_id: runeSector.id
};

const surRune = {
    id: '403daee1-c8f4-4b69-b937-95ba8f9706d1',
    name: 'Sur Rune',
    image_url: '/diablo/Sur_Rune.png',
    sector_id: runeSector.id
};

const berRune = {
    id: '8aa9b81d-af4f-4fe1-82a1-13b149c39a6b',
    name: 'Ber Rune',
    image_url: '/diablo/Ber_Rune.png',
    sector_id: runeSector.id
};

const jahRune = {
    id: 'daca2a7d-9fc7-42cc-afef-e5dd435925fc',
    name: 'Jah Rune',
    image_url: '/diablo/Jah_Rune.png',
    sector_id: runeSector.id
};

const chamRune = {
    id: '4355da6f-38e0-4162-af6f-efd7ce2236d2',
    name: 'Cham Rune',
    image_url: '/diablo/Cham_Rune.png',
    sector_id: runeSector.id
};

const zodRune = {
    id: 'b9225d69-432f-4a0e-826c-cce2a0057148',
    name: 'Zod Rune',
    image_url: '/diablo/Zod_Rune.png',
    sector_id: runeSector.id
};

const runeAchievements = [
    lemRune,
    pulRune,
    umRune,
    malRune,
    istRune,
    gulRune,
    vexRune,
    ohmRune,
    loRune,
    surRune,
    berRune,
    jahRune,
    chamRune,
    zodRune
];

module.exports = { runeAchievements, runeSector };
