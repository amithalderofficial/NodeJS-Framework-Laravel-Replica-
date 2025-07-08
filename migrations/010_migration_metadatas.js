'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('metadatas', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
        deletedAt: { type: Sequelize.DATE },
        });




    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('metadatas');
    }
};