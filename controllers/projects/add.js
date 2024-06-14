const Projects = require('../../models/Projects')

const { projectSchema } = require('../../validations/Projects');
const addUser = async(req,res,next)=>{
    try{
        const {org_id,id} = req.user;
        console.log(req.user)
        const {error,value} = projectSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message : error.details[0].message });
            }
        value.org_id=org_id;
        value.created_by=id;
        const project = await Projects.create(value);
        return res.json(project)
    }catch(e){
        next(e);
    }

}
module.exports = addUser;