'use strict';
let md5 = require('md5');
var datetime = require('node-datetime');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [{
      name: 'Admin',
      description: 'Super Admin',
      status: 1,
      created_by: 1,
      createdAt: null,
    },
    {
      name: 'BU Admin',
      description: 'Business Unit Admin',
      status: 1,
      created_by: 1,
      createdAt: null,
    },
    {
      name: 'Funtional Reviewer',
      description: 'Funtional Reviewer',
      status: 1,
      created_by: 1,
      createdAt: null,
    },
    {
      name: 'Funtional Lead',
      description: 'Funtional Lead',
      status: 1,
      created_by: 1,
      createdAt: null,
    }
  ], {});
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
