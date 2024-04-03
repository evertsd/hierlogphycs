const { imageOfAndariel } = require('./images.js');

const root = {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'D2R',
    image_url: '/diablo/D2R-Logo.png'
};

const actOne = {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Act I',
    image_url: '/diablo/Rogue-Encampment.png',
    parent_sector_id: root.id
};

const actTwo = {
    id: 'd04c9a57-a3b6-4bf6-b16e-761d341525c8',
    name: 'Act II',
    image_url: '/diablo/Lut-Gholein.png',
    parent_sector_id: root.id
};

const diabloSectors = [root, actOne];

module.exports = { actOne, actTwo, root, diabloSectors };
