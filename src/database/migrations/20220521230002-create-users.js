'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      second_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      second_last_name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      privileges: {
        type: DataTypes.ARRAY(),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      payment_period_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      business_unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      on_leave: {
        type: Sequelize.BOOLEAN
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};