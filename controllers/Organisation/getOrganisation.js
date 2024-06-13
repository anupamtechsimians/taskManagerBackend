const Organisation = require('../../models/Organisation')
const getOrg  = async (req, res, next) => {
    try {
        const {id} = req.params;
            const org = await Organisation.findByPk(id);
            if(!org){
                return res.status(400).json({message:"User Not Found"});
            }
        res.status(200).json(org);
      } catch (error) {
        next(error)
      }
}
module.exports=getOrg;