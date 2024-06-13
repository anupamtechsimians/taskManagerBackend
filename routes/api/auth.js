// routes/user.js
const router = require('express').Router();

const signup=require('../../controllers/auth/signup')
const login=require('../../controllers/auth/login')
const validateToken= require('../../middleware/jwtValidation')
const me = require('../../controllers/auth/me')
const updateProfile = require('../../controllers/auth/updateProfile')
const {findAccount,validateOtp,resetPassword2,resetPasswordWithPassword} = require("../../controllers/auth/forgotPassword")
router.post('/register', signup);
router.post('/login', login);
router.post('/forgot', findAccount);
router.post('/password/reset', resetPassword2);
router.post('/password/otp', validateOtp);
router.put('/password/:id',validateToken, resetPasswordWithPassword);
router.get('/me', validateToken,me);
router.put('/me', validateToken,updateProfile);


module.exports = router;
