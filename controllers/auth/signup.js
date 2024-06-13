const User = require('../../models/User');
const Org = require('../../models/Organisation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {jwt_secret} = require('../../config/keys');
const sequelize = require('../../config/database');
const create = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { name, email, password,metaData  } = req.body;
    const emailExist = await User.findOne({where:{ email: email}});
    if(emailExist) {
      await t.rollback();
      return res.status(400).json({message:"email already exist"})
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the user with the hashed password
    const user = await User.create({ name, email, password: hashedPassword,isSuper:1,metaData });
    const org = await Org.create({email,ownerId:user.id});
     await user.update({parent_user:user.id,org_id:org.id},{where:{id:user.id}});
    const accessToken =  jwt.sign(
      { id: user.id, email: user.email,org_id:org.id},
      jwt_secret,
      { expiresIn: '2d' }
    );
    await t.commit();
    res.status(201).json({accessToken,user});
  } catch (err) {
    await t.rollback();
    next(err);
  }
};

module.exports = create;
