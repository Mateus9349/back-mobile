'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Collects.init({
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    foodExpenses: DataTypes.FLOAT,
    boatExpenses: DataTypes.FLOAT,
    rebetaExpenses: DataTypes.FLOAT,
    otherExpenses: DataTypes.FLOAT,
    balseExpenses: DataTypes.FLOAT,
    materialPerDayExpenses: DataTypes.FLOAT,
    materialExpensesTotal: DataTypes.FLOAT,
    status: DataTypes.STRING,
    closedDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Collects',
  });
  return Collects;
};