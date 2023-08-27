//requiring all seeded files
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

//Creating messages for console log
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE ENTERED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES ENTERED -----\n');

    await seedProducts();
    console.log('\n----- PRODUCTS ENTERED -----\n');

    await seedTags();
    console.log('\n----- TAGS ENTERED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS ENTERED -----\n');

    process.exit(0);
};

seedAll();