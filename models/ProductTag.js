// importing parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// importing config.js
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  // product id column
  product_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "product",
          key: "id"
      }
  },
  // tag id column
  tag_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "tag",
          key: "id"
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

//exporting ProductTag
module.exports = ProductTag;