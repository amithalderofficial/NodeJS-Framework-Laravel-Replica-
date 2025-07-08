const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bu_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'business_units',
        key: 'id'
      }
    },
    function_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'functions',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'departments',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "departments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
