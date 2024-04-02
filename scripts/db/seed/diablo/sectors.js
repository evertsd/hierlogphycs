const { imageOfAndariel } = require('./images.js');

const root = {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'D2R',
    image_url: 'https://www.diablo-2.net/images/logo/Diablo-2-Resurrected-Logo.webp'
};

const actOne = {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Act I',
    image_url: imageOfAndariel,
    parent_sector_id: root.id
};

const diabloSectors = [root, actOne];

module.exports = { actOne, diabloSectors };
