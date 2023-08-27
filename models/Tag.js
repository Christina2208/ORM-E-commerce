// importing parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// importing config.js
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  // tag name column
    tag_name: {
      type: DataTypes.STRING
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

//exporting Tag
module.exports = Tag;