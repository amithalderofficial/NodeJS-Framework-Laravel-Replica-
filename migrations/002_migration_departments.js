'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('departments', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            bu_id: { type: Sequelize.INTEGER, default: 0 },
            function_id: { type: Sequelize.INTEGER, default: 0 },
            description: { type: Sequelize.STRING },
            status: { type: Sequelize.STRING },
            created_by: { type: Sequelize.INTEGER },
            updated_by: { type: Sequelize.INTEGER },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE },
        });

       


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('departments');
    }
};