// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getOrg = require('../../controllers/Organisation/getOrganisation');
const updateOrg = require('../../controllers/Organisation/update');
const createOrg = require('../../controllers/Organisation/create');

router.get('/:id', validateToken,getOrg);
router.put('/:id', validateToken,updateOrg);
// router.post('/', validateToken,createOrg);


module.exports = router;
