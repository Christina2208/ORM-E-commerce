// importing the models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories can have multiple products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products can belong to many Tags 
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belong to many Product
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

//exporting
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};