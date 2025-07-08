'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('function_employee_mapping', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        function_id: { type: Sequelize.INTEGER, allowNull: false },
        employee_id: { type: Sequelize.INTEGER, allowNull: false },
        dept_id: { type: Sequelize.INTEGER, allowNull: false },
        user_type: { type: Sequelize.STRING },
        user_sub_type: { type: Sequelize.STRING },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
        deletedAt: { type: Sequelize.DATE },
        });

        

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('function_employee_mapping');
    }
};