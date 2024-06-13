const Organisation = require('../../models/Organisation')
const organisationSchema  = require('../../validations/Organisation')
const createOrg  = async (req, res, next) => {
    try {
        // Validate request body against Joi schema
        const { value,error } = organisationSchema.OrganisationCreateSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
            value.ownerId = req.user.id
            const organisation = await Organisation.create(value);
        res.status(201).json(organisation);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
module.exports=createOrg;