// routes/user.js
const router = require('express').Router();

const validateToken= require('../../middleware/jwtValidation')
const getOrg = require('../../controllers/Organisation/getOrganisation');
const updateOrg = require('../../controllers/Organisation/update');
const getOrgByDOmain = require('../../controllers/Organisation/getOrganisationByDomain');
const checkDuplicate = require('../../controllers/Organisation/checkDuplicate');

router.get('/domain/:domain',getOrgByDOmain);
router.get('/duplicate/:domain',checkDuplicate);
router.get('/:id', validateToken,getOrg);
router.put('/:id', validateToken,updateOrg);


module.exports = router;
