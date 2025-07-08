require("dotenv").config();
const jwt = require("jsonwebtoken");
const rateLimit = require('express-rate-limit');

// This is the secret key (should be stored securely, e.g., in .env)
const jwtSecretKey = process.env.HASHING_SALT;

class SecurityMiddleware {

    /**
     * @description This method verify the token and expairation
     * @param {object} req
     * @param {object} res
     * @param {callback} next()
     * @return {string} response
     */
    AuthentiCateUserTokenMiddleware(req, res, next) {
        // Get the token from the Authorization header
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Extract the token after 'Bearer '
        if (token == null) {
            res.status(401).json({ status : false, messege : 'Unauthenticated' }); // No token provided, unauthorized
        }

        jwt.verify(token, jwtSecretKey, (err, decodedUser) => {
            if (err) {
                // Invalid or expired token, forbidden
                return res.status(401).json({ status : false, messege : 'Token Expaired' });
            }
            // If verification is successful, attach the decoded user data to the request object
            req.user = decodedUser;
            next(); // Proceed to the next middleware or route handler
        });
    }


    /**
     * @description This method verify the token and expairation
     * @param {object} req
     * @param {object} res
     * @param {callback} next()
     * @return {string} response
     */
    throttle(req, res, next) {
        

        next();
    }

}



module.exports = new SecurityMiddleware();