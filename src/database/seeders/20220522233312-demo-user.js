'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "superadmin",
        role_id: 1
      },
      {
        first_name: "admin",
        role_id: 2
      },
      {
        first_name: "collab",
        role_id: 3
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};