// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getUser = require('../../controllers/projects/get');
const getUsers = require('../../controllers/projects/getAll');
const createUser = require('../../controllers/projects/add');
const updateUser = require('../../controllers/projects/update');

router.get('/', validateToken,getUsers);
router.patch('/:id', validateToken,updateUser);
router.post('/', validateToken,createUser);
router.get('/:id', validateToken,getUser);


module.exports = router;
