// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getUser = require('../../controllers/tasks/get');
const getUsers = require('../../controllers/tasks/getAll');
const createUser = require('../../controllers/tasks/add');
const updateUser = require('../../controllers/tasks/update');

router.get('/', validateToken,getUsers);
router.patch('/:id', validateToken,updateUser);
router.post('/', validateToken,createUser);
router.get('/:id', validateToken,getUser);


module.exports = router;
