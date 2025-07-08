let Models = require('../../models/index');
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");
require('@dotenvx/dotenvx').config();
let md5 = require('md5');

/**
 * @description This function generate employee list
 * @param {object} req.username
 * @param {object} res.password
 * @return {string} response
*/

async function roleWithPermission(id) {
    const PermissionS = await Models.role_has_permissions.findAll({
        where: {
            role_id: id,
        },
    });

    return PermissionS;
}



module.exports = { roleWithPermission };