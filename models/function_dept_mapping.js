const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('function_dept_mapping', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    function_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'functions',
        key: 'id'
      }
    },
    dept_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'function_dept_mapping',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "function_dept_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
