const Projects = require('../../models/Projects')
const ProjectMembers = require('../../models/ProjectMembers')
const { projectSchema } = require('../../validations/Projects');
const sequelize = require('../../config/database')
const addUser = async(req,res,next)=>{
    const t= await sequelize.transaction();
    try{
        const {org_id,id} = req.user;
        const {error,value} = projectSchema.validate(req.body)
        if (error) {
            await t.rollback();
            return res.status(400).json({ message : error.details[0].message });
            }
            
        value.org_id=org_id;
        value.created_by=id;
        const project = await Projects.create(value);

        await ProjectMembers.findOrCreate({where:{project_id:project.id,user_id:id},default:{project_id:project.id,user_id:id,role:"OWNER"},transaction:t})
            await Promise.all(
                value?.project_members?.map(async(user_id)=>{
                    await ProjectMembers.findOrCreate({where:{project_id:project.id,user_id},default:{project_id:project.id,user_id,role:"MEMBER"},transaction:t})
                })
            )
        await t.commit();
        return res.json(project)
    }catch(e){
        await t.rollback();
        next(e);
    }

}
module.exports = addUser;