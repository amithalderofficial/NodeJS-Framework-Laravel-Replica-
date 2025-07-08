'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('document_version', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            document_id: { type: Sequelize.INTEGER, allowNull: false },
            function_id: { type: Sequelize.INTEGER, allowNull: false },
            version_id: { type: Sequelize.INTEGER, allowNull: false },
            version: { type: Sequelize.STRING },
            file_path: { type: Sequelize.STRING },
            changes: { type: Sequelize.TEXT },
            created_by: { type: Sequelize.INTEGER },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE },
        });

        


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('document_version');
    }
};