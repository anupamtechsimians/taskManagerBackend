const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const validateToken = (req, res, next) => {
  try {
    // Get the access token from the request headers
    const accessToken = req.headers.authorization;
    // If the access token is missing, return a 401 error
    if (!accessToken) {
      throw createError(401, 'Access token is missing');
    }

    // Verify the access token with JWT
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY || "12312312m3m12m3m12m3m123");

    // Add the user ID and email to the request object
    req.user = decodedToken

  
    next();
  } catch (err) {
      console.error(err);
      res.status(401).json({ message: "Access token is invalid" });  
    }
    
};

module.exports = validateToken;
