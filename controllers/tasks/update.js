const Projects = require('../../models/Tasks')
const { taskUpdateSchema } = require('../../validations/Tasks');

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } = taskUpdateSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    await Projects.update(value,{where:{id}});
    const updated = await Projects.findByPk(id);
    return res.json({task:updated});
  } catch (e) {
    next(e);
  }
};

module.exports = updateUser;
