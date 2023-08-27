const { Product } = require('../models');

const productData = [
  {
    product_name: 'Necklace',
    price: 22.99,
    stock: 16,
    category_id: 1,
  },
  {
    product_name: 'Blush',
    price: 13.99,
    stock: 30,
    category_id: 2,
  },
  {
    product_name: 'Dry Shampoo',
    price: 44.99,
    stock: 11,
    category_id: 3,
  },
  {
    product_name: 'Tote Bag',
    price: 27.99,
    stock: 43,
    category_id: 4,
  },
  {
    product_name: 'Slippers',
    price: 21.99,
    stock: 20,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;