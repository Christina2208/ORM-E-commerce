const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Jewelry",
  },
  {
    category_name: "Makeup",
  },
  {
    category_name: "Hair Products",
  },
  {
    category_name: "Purses",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
