'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('employees', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        salutation: { type: Sequelize.STRING },
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        mobile: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
        role_id: { type: Sequelize.INTEGER },
        status: { type: Sequelize.STRING },
        created_by: { type: Sequelize.INTEGER },
        updated_by: { type: Sequelize.INTEGER },
        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE },
        deletedAt: { type: Sequelize.DATE },
        });




    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('employees');
    }
};