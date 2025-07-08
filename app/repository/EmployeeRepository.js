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
async function listEmployees(req,res){
    const results = await Models.employees.findAll();
    res.send(results);
}

/**
 * @description This function will login employee
 * @param {object} req.username
 * @param {object} res.password
 * @return {string} response
 */
async function login(req,res) {
    let response = { code: 401 ,status: false, message: 'Invalid Username', data: [] };
    const { username, password } = req.body;
    const results = await Models.employees.findAll({
        where: {
            email: username,
            password: md5(password),
            deletedAt: null,
        },
    });
    
    if (results.length == 1) {
        let userdetails = results[0];
        if(userdetails.status == 0) {
            response.code = 200;
            response.message = "This user has been inactivated.Please contact to administrator";
            res.status(401).json(response);
        }
        
        const payload = { userId: userdetails.id, email: userdetails.email, mobile: userdetails.mobile};
        // Generate the token & modify response objects
        const token = jwt.sign(payload, process.env.HASHING_SALT, { expiresIn: '1h' }); // Token expires in 1 hour
        response._token = token;
        response.data = userdetails;
        response.status = true;
        response.code = 200;
        response.message = "Successfully Authenticated";
        response.permisssions = [];
        response.idSuperAdmin = (userdetails.role_id == 1) ? true : false;
        res.json(response); // Send the token back to the client
    } else {
        res.status(response.code).json(response);
    }
}

/**
 * @description This function will forgot password employee
 * @param {object} req.email
 * @return {string} response
 */
async function forgotpassword(req,res) {
    
}


module.exports = { listEmployees , login };