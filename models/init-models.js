var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _business_units = require("./business_units");
var _departments = require("./departments");
var _document_version = require("./document_version");
var _documents = require("./documents");
var _employee_bu_mapping = require("./employee_bu_mapping");
var _employee_details = require("./employee_details");
var _employees = require("./employees");
var _folders = require("./folders");
var _function_dept_mapping = require("./function_dept_mapping");
var _function_employee_mapping = require("./function_employee_mapping");
var _functions = require("./functions");
var _metadatas = require("./metadatas");
var _permissions = require("./permissions");
var _role_has_permissions = require("./role_has_permissions");
var _roles = require("./roles");
var _settings = require("./settings");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var business_units = _business_units(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var document_version = _document_version(sequelize, DataTypes);
  var documents = _documents(sequelize, DataTypes);
  var employee_bu_mapping = _employee_bu_mapping(sequelize, DataTypes);
  var employee_details = _employee_details(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var folders = _folders(sequelize, DataTypes);
  var function_dept_mapping = _function_dept_mapping(sequelize, DataTypes);
  var function_employee_mapping = _function_employee_mapping(sequelize, DataTypes);
  var functions = _functions(sequelize, DataTypes);
  var metadatas = _metadatas(sequelize, DataTypes);
  var permissions = _permissions(sequelize, DataTypes);
  var role_has_permissions = _role_has_permissions(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var settings = _settings(sequelize, DataTypes);

  departments.belongsTo(business_units, { as: "bu", foreignKey: "bu_id"});
  business_units.hasMany(departments, { as: "departments", foreignKey: "bu_id"});
  employee_bu_mapping.belongsTo(business_units, { as: "bu", foreignKey: "bu_id"});
  business_units.hasMany(employee_bu_mapping, { as: "employee_bu_mappings", foreignKey: "bu_id"});
  functions.belongsTo(business_units, { as: "bu", foreignKey: "bu_id"});
  business_units.hasMany(functions, { as: "functions", foreignKey: "bu_id"});
  documents.belongsTo(departments, { as: "dept", foreignKey: "dept_id"});
  departments.hasMany(documents, { as: "documents", foreignKey: "dept_id"});
  folders.belongsTo(departments, { as: "dept", foreignKey: "dept_id"});
  departments.hasMany(folders, { as: "folders", foreignKey: "dept_id"});
  function_dept_mapping.belongsTo(departments, { as: "dept", foreignKey: "dept_id"});
  departments.hasMany(function_dept_mapping, { as: "function_dept_mappings", foreignKey: "dept_id"});
  function_employee_mapping.belongsTo(departments, { as: "dept", foreignKey: "dept_id"});
  departments.hasMany(function_employee_mapping, { as: "function_employee_mappings", foreignKey: "dept_id"});
  document_version.belongsTo(document_version, { as: "document_version", foreignKey: "version_id"});
  document_version.hasMany(document_version, { as: "document_versions", foreignKey: "version_id"});
  document_version.belongsTo(documents, { as: "document", foreignKey: "document_id"});
  documents.hasMany(document_version, { as: "document_versions", foreignKey: "document_id"});
  employee_bu_mapping.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(employee_bu_mapping, { as: "employee_bu_mappings", foreignKey: "employee_id"});
  employee_details.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(employee_details, { as: "employee_details", foreignKey: "employee_id"});
  function_employee_mapping.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(function_employee_mapping, { as: "function_employee_mappings", foreignKey: "employee_id"});
  documents.belongsTo(folders, { as: "folder", foreignKey: "folder_id"});
  folders.hasMany(documents, { as: "documents", foreignKey: "folder_id"});
  departments.belongsTo(functions, { as: "function", foreignKey: "function_id"});
  functions.hasMany(departments, { as: "departments", foreignKey: "function_id"});
  document_version.belongsTo(functions, { as: "function", foreignKey: "function_id"});
  functions.hasMany(document_version, { as: "document_versions", foreignKey: "function_id"});
  documents.belongsTo(functions, { as: "function", foreignKey: "function_id"});
  functions.hasMany(documents, { as: "documents", foreignKey: "function_id"});
  folders.belongsTo(functions, { as: "function", foreignKey: "function_id"});
  functions.hasMany(folders, { as: "folders", foreignKey: "function_id"});
  function_dept_mapping.belongsTo(functions, { as: "function", foreignKey: "function_id"});
  functions.hasMany(function_dept_mapping, { as: "function_dept_mappings", foreignKey: "function_id"});
  function_employee_mapping.belongsTo(functions, { as: "function", foreignKey: "function_id"});
  functions.hasMany(function_employee_mapping, { as: "function_employee_mappings", foreignKey: "function_id"});

  return {
    SequelizeMeta,
    business_units,
    departments,
    document_version,
    documents,
    employee_bu_mapping,
    employee_details,
    employees,
    folders,
    function_dept_mapping,
    function_employee_mapping,
    functions,
    metadatas,
    permissions,
    role_has_permissions,
    roles,
    settings,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
