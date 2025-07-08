'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('permissions', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            name: { type: Sequelize.STRING },
            short_category_code: { type: Sequelize.STRING },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('permissions');
    }
};