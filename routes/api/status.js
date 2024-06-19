// routes/user.js
const validateToken = require('../../middleware/jwtValidation')
const router = require('express').Router();
const getUser = require('../../controllers/status/get');
const getUsers = require('../../controllers/status/getAll');
const createUser = require('../../controllers/status/add');
const updateUser = require('../../controllers/status/update');

router.get('/', validateToken,getUsers);
router.patch('/:id', validateToken,updateUser);
router.post('/', validateToken,createUser);
router.get('/:id', validateToken,getUser);


module.exports = router;
