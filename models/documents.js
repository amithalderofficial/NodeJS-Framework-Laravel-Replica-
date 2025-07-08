const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'folders',
        key: 'id'
      }
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
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    original_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    absolute_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_data: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_cloud_sync: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    uploded_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    approved_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'documents',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "documents_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
