const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee_bu_mapping', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'business_units',
        key: 'id'
      }
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'employee_bu_mapping',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "employee_bu_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
