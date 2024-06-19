const Projects = require('../../models/status')
const { statusUpdateSchema } = require('../../validations/status');

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } = statusUpdateSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    await Projects.update(value,{where:{id}});
    const updated = await Projects.findByPk(id);
    return res.json({board:updated});
  } catch (e) {
    next(e);
  }
};

module.exports = updateUser;
