'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('settings', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        value: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
        deletedAt: { type: Sequelize.DATE },
        });




    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('settings');
    }
};