const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'gold', //1
  },
  {
    tag_name: 'silver', //2
  },
  {
    tag_name: 'lip', //3
  },
  {
    tag_name: 'skin', //4
  },
  {
    tag_name: 'hair', //5
  },
  {
    tag_name: 'leather', //6
  },
  {
    tag_name: 'canvas', //7
  },
  {
    tag_name: 'casual', //8
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;