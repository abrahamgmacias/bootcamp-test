'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('business_unit',
      [
        {
          id: 1,
          name: 'Michelada'
        }
      ], {});

    await queryInterface.bulkInsert('users',
      [
        {
          id: 1,
          name: 'Abraham',
          last_name: 'Gonzalez',
          role: 'user',
          email: 'a326628@uach.mx',
          password: 'password',
          business_unit_id: 1
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
