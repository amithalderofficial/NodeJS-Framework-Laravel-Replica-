'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('role_has_permissions', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            role_id: { type: Sequelize.INTEGER },
            permission_id: { type: Sequelize.INTEGER },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('role_has_permissions');
    }
};