'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('employee_details', {
            id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            employee_id: { type: Sequelize.INTEGER, allowNull: false },
            country_code: { type: Sequelize.STRING },
            emp_code: { type: Sequelize.STRING, unique: true },
            designation: { type: Sequelize.STRING },
            pincode: { type: Sequelize.STRING },
            city: { type: Sequelize.STRING },
            state: { type: Sequelize.STRING },
            country: { type: Sequelize.STRING },
            address: { type: Sequelize.STRING },
            deletedAt: { type: Sequelize.DATE },
        });

     

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('employee_details');
    }
};