const Organisation = require('../../models/Organisation')
const getOrg  = async (req, res, next) => {
    try {
        const {domain} = req.params;
            const org = await Organisation.findOne({where:{domain}});
            if(!org){
                 return res.status(400).json({message:"Organision Not Found"});
            }
        res.status(200).json(org);
      } catch (error) {
        next(error)
      }
}
module.exports=getOrg;