const Projects = require('../../models/Projects')
const ProjectMembers = require('../../models/ProjectMembers')
const { projectUpdateSchema } = require('../../validations/Projects');
const sequelize = require('../../config/database')

const updateUser = async (req, res, next) => {
  const t= await sequelize.transaction();
  try {
    const { id } = req.params;
    const { error, value } = projectUpdateSchema.validate(req.body);
    if (error) {
      await t.rollback()
      return res.status(400).json({ message: error.details[0].message });
    }
    console.log(value)
    await Promise.all(
      value?.project_members?.map(async(user_id)=>{
          await ProjectMembers.findOrCreate({where:{project_id:id,user_id},default:{project_id:id,user_id},transaction:t})
      })
  )
    await Projects.update(value,{where:{id}});
    const updated = await Projects.findByPk(id);
    await t.commit()
    return res.json({project:updated});
  } catch (e) {
    await t.rollback()
    next(e);
  }
};

module.exports = updateUser;
