const Conversation = require('../../models/ConversationMembers'); // Import the Conversation model
const {memberSchema} = require('../../validations/conversation')
const addCOnversationMember = async (req, res) => {
    try {
        const {error,value} = memberSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message : error.details[0].message });
            }
        const data =await validateMembers(value)

        return res.status(200).json(validateMembers); // Existing conversation found
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error creating or retrieving conversation' });
    }
};

const validateMembers = async (values)=>{
    try{
    const data = Promise.all(values.user_ids.map(async(dd)=>{
        if(dd.type==="REMOVE"){
            await Conversation.update({is_deleted:true},{where:{user_id:dd.id,conversation_id:dd.conversation_id}});
            return {data:removed}
        }else{
            const [member, created]  = await Conversation.findOrCreate({where:{user_id:dd.id,conversation_id:values.conversation_id},
                defaults:{user_id,conversation_id:dd.conversation_id,role:"Member"}})
                return { data: member }; 
        }
    })
    )
    }
    catch(e){
        throw error(e)
}}
module.exports = addCOnversationMember;



