const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Backgrounds extends Model {}

Backgrounds.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    background_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Skills",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Backgrounds",
  }
);

module.exports = Backgrounds;
