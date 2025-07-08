const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'id'
      }
    },
    country_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emp_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "employee_details_emp_code_key"
    },
    designation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pincode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee_details',
    schema: 'public',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "employee_details_emp_code_key",
        unique: true,
        fields: [
          { name: "emp_code" },
        ]
      },
      {
        name: "employee_details_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
