const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('document_version', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'documents',
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
    version_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'document_version',
        key: 'id'
      }
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    changes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'document_version',
    schema: 'public',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "document_version_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
