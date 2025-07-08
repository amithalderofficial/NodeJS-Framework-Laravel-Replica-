'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('function_dept_mapping', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        function_id: { type: Sequelize.INTEGER, allowNull: false },
        dept_id: { type: Sequelize.INTEGER, allowNull: false },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
        deletedAt: { type: Sequelize.DATE },
        });

        


    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('function_dept_mapping');
    }
};