const Organisation = require('../../models/Organisation')
const organisationSchema  = require('../../validations/Organisation')
const createOrg  = async (req, res, next) => {
    try {
        const {id} = req.params
        // Validate request body against Joi schema
        const { value,error } = organisationSchema.OrganisationUpdateSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ error: error.details[0].message });
        }
            const org = await Organisation.findByPk(id);
            if(!org){
                return res.status(400).json({message:"User Not Found"});
            }
             await Organisation.update(value,{where:{id}});
        res.status(200).json({updated:true});
      } catch (error) {
        next(error)
      }
}
module.exports=createOrg;