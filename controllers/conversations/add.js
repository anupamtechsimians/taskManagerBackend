const Conversation = require('../../models/Conversations')

const { conversationSchema } = require('../../validations/conversation');
const addConversation = async(req,res,next)=>{
    try{
        const {id,org_id} = req.user;
        const {error,value} = conversationSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message : error.details[0].message });
            }
        if(value.type==="SINGLE"){
            let {user1,user2}  = value
            if(!user1 || !user2){
                return res.status(400).json({message:`"user1" and "user2" are required`})
            }
            const [conversation, created] = await Conversation.findOrCreate({
                where: {
                  [Op.or]: [
                    {
                      [Op.and]: [
                        { user1 },
                        { user2 },
                      ],
                    },
                    {
                      [Op.and]: [
                        { user1: user2 },
                        { user2: user1 },
                      ],
                    },
                  ],
                },
                defaults: {
                  user1,user2,type:"SINGLE",created_by:id,org_id:org_id
                },
              });

              if (created) {
                return res.status(201).json(conversation);
            }
        }else{
            const convesationExist = await Conversation.findOne({where:{org_id,name:value.name}}) 
            if(convesationExist){
                return res.status(400).json({message:"group already exist with this name"})
            }
            value.created_by=id;
            value.org_id=org_id;
            const conversation = await Conversation.create(value);
            return res.status(201).json(conversation)
        }
        
    }catch(e){
        next(e);
    }

}
module.exports = addConversation;