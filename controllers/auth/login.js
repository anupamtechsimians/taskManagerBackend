const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const User  = require('../../models/User');
const key = require('../../config/keys').jwt_secret
const sequelize = require('../../config/database')
const {QueryTypes} = require('sequelize')

const login = async (req, res,next) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({where:{ email: email}});
    // If the user doesn't exist, return a 404 error
    if (!user) {
      return res.status(400).json({message:"User not found"})
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the passwords don't match, return a 401 error
    if (!isPasswordValid) {
      return res.status(400).json({message:"Password Not Matched"})
    }

    // Generate an access token with JWT
    const accessToken = jwt.sign(
      { id: user.id, email: user.email,name:user.name,org_id:user.org_id},
        key,
      { expiresIn: '2d' }
    );
        delete user.password;
    // Return the access token to the client
    res.status(200).json({ accessToken,user });
  } catch (err) {
    next(err);
  }
};

module.exports = login;
