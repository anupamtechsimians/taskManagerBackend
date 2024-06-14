// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getUser = require('../../controllers/boards/get');
const getUsers = require('../../controllers/boards/getAll');
const createUser = require('../../controllers/boards/add');
const updateUser = require('../../controllers/boards/update');

router.get('/', validateToken,getUsers);
router.patch('/:id', validateToken,updateUser);
router.post('/', validateToken,createUser);
router.get('/:id', validateToken,getUser);


module.exports = router;
