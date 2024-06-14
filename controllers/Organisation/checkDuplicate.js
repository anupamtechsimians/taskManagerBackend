const Organisation = require('../../models/Organisation')
const getOrg  = async (req, res, next) => {
    try {
        const {domain} = req.params;
            const org = await Organisation.findOne({where:{domain}});
            if(!org){
                 return res.status(200).json({message:false});
            }
        res.status(200).json({message:true});
      } catch (error) {
        next(error)
      }
}
module.exports=getOrg;