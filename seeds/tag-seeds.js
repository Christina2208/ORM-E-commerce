const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'lip',
  },
  {
    tag_name: 'skin',
  },
  {
    tag_name: 'hair',
  },
  {
    tag_name: 'leather',
  },
  {
    tag_name: 'canvas',
  },
  {
    tag_name: 'casual',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;