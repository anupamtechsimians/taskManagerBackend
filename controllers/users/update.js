const User = require("../../models/User");
const bcrypt = require("bcrypt");
const { userUpdateSchema } = require("../../validations/user");

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error, value } = userUpdateSchema.validate(req.body);
    if (value.password) {
      value.password = await bcrypt.hash(value.password, 10);
    }
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    if (value.email) {
      const userexist = await User.findOne({
        where: { email: value.email},
      });
      if (userexist?.id ===id) {
        return res.status(400).json({ message: "Email already Exists" });
      }
    }
    await User.update(value,{where:{id}});
    const updated = await User.findByPk(id);
    return res.json({user:updated});
  } catch (e) {
    next(e);
  }
};

module.exports = updateUser;
