'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Collects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      foodExpenses: {
        type: Sequelize.FLOAT
      },
      boatExpenses: {
        type: Sequelize.FLOAT
      },
      rebetaExpenses: {
        type: Sequelize.FLOAT
      },
      otherExpenses: {
        type: Sequelize.FLOAT
      },
      balseExpenses: {
        type: Sequelize.FLOAT
      },
      materialPerDayExpenses: {
        type: Sequelize.FLOAT
      },
      materialExpensesTotal: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.STRING
      },
      closedDate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Collects');
  }
};