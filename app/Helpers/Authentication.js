require("dotenv").config();
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");

// Define your secret key (should be stored securely, e.g., in .env)
const jwtSecretKey = process.env.JWT_SECRET_KEY || 'your_super_secret_key'; 

function authenticateToken(req, res, next) {
    // Get the token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token after 'Bearer '
    
    if (token == null) {
        return res.status(401).send({ status : false, messege : 'Unauthenticated' }); // No token provided, unauthorized
    }

    jwt.verify(token, jwtSecretKey, (err, decodedUser) => {
        if (err) {
            return res.sendStatus(403); // Invalid or expired token, forbidden
        }
        // If verification is successful, attach the decoded user data to the request object
        req.user = decodedUser; 
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = { authenticateToken }