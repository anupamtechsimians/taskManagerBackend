// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getUser = require('../../controllers/TaskComments/get');
const getUsers = require('../../controllers/TaskComments/getAll');
const createUser = require('../../controllers/TaskComments/add');

router.get('/all/:task_id', validateToken,getUsers);
router.post('/:task_id', validateToken,createUser);
router.get('/:id', validateToken,getUser);


module.exports = router;
