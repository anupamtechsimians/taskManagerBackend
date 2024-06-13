// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getUser = require('../../controllers/users/get');
const getUsers = require('../../controllers/users/getAll');
const createUser = require('../../controllers/users/add');
const updateUser = require('../../controllers/users/update');

router.get('/', validateToken,getUsers);
router.patch('/:id', validateToken,updateUser);
router.post('/', validateToken,createUser);
router.get('/:id', validateToken,getUser);


module.exports = router;
