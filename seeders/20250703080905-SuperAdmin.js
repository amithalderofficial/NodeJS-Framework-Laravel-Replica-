'use strict';
let md5 = require('md5');
var datetime = require('node-datetime');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('employees', [{
      salutation: 'Mr.',
      name: 'Super Admin',
      email: 'superadmin@in.gt.com',
      mobile: '9898989898',
      password: md5('12345'),
      role_id: 1,
      status: 1,
      created_by: 1,
      createdAt: null,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
