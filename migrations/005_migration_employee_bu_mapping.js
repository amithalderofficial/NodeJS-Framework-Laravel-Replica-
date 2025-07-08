'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('employee_bu_mapping', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            bu_id: { type: Sequelize.INTEGER, allowNull: false },
            employee_id: { type: Sequelize.INTEGER, allowNull: false },
            createdAt: { type: Sequelize.DATE },
            updatedAt: { type: Sequelize.DATE },
            deletedAt: { type: Sequelize.DATE },
        });

        

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('employee_bu_mapping');
    }
};