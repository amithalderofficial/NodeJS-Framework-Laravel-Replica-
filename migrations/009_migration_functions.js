'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('functions', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            bu_id: { type: Sequelize.INTEGER, allowNull: false },
            name: { type: Sequelize.STRING },
            description: { type: Sequelize.STRING },
            start_date: { type: Sequelize.STRING },
            end_date: { type: Sequelize.STRING },
            status: { type: Sequelize.STRING },
            created_by: { type: Sequelize.INTEGER },
            updated_by: { type: Sequelize.INTEGER },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE },
        });

        


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('functions');
    }
};