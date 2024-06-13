const User = require('../../models/User')
const bcrypt = require('bcrypt')

const { userSchema } = require('../../validations/user');
const addUser = async(req,res,next)=>{
    try{
        const {org_id,id} = req.user;
        const {error,value} = userSchema.validate(req.body)
        value.password = await bcrypt.hash(value.password,10); 
        if (error) {
            return res.status(400).json({ message : error.details[0].message });
            }
        const userexist = await User.findOne({where:{email:value.email}})
        if(userexist){
            return res.status(400).json({message:"Email already Exists"});
        }
        value.org_id=org_id;
        value.created_by=id;
        const user = await User.create(value);
        return res.json(user)
    }catch(e){
        next(e);
    }

}
module.exports = addUser;