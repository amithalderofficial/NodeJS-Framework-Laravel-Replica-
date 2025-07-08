'use strict';
let md5 = require('md5');
var datetime = require('node-datetime');
const fs = require('node:fs');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const data = fs.readFileSync('./permissions.json', 'utf8');
      await queryInterface.bulkInsert('permissions', JSON.parse(data), {});
    } catch (err) {
      console.error('Error reading file synchronously:', err);
    }
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
