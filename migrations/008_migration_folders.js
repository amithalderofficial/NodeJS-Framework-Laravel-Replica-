'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('folders', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            parent_id: { type: Sequelize.INTEGER },
            function_id: { type: Sequelize.INTEGER, allowNull: false },
            dept_id: { type: Sequelize.INTEGER, allowNull: false },
            name: { type: Sequelize.STRING },
            absolute_path: { type: Sequelize.STRING },
            status: { type: Sequelize.STRING },
            created_by: { type: Sequelize.INTEGER },
            updated_by: { type: Sequelize.INTEGER },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE },
        });

        


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('folders');
    }
};