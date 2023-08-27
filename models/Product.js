// importing parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// importing config.js
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  // product name column
  product_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  // price column
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
          isDecimal: true
      }
  },
  // stock column
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
          isNumeric: true
      }
  },
  // category id column
  category_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "category",
          key: "id"
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

//exporting Product
module.exports = Product;