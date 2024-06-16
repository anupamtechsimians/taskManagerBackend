// routes/user.js
const router = require('express').Router();

const add = require('../../controllers/conversations/add');
const getAll = require('../../controllers/conversations/getAll');
const get = require('../../controllers/conversations/get');
const updateUser = require('../../controllers/conversations/updateConversationMembers');

router.get('/', getAll);
router.patch('/:id',updateUser);
router.post('/',add);
router.get('/:id',get);


module.exports = router;
