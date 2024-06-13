const User = require('../../models/User');

const bcrypt = require('bcrypt');
// const createBucket = require('../../helper/createBucket')

const create = async (req, res, next) => {
    const id = req.user.id
  try {
    const { name, email,metaData  } = req.body;
    
    let password = req.body.password?await bcrypt.hash(req.body.password, 10):req.body.password;
    if(email){
      const emailExist = await User.findOne({where:{ email: email}});
    if(emailExist) {
      return res.status(400).json({message:"email already exist"})
    }
  }
   const user =  await User.update({email,password,name,metaData},{where:{id}})
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = create;
