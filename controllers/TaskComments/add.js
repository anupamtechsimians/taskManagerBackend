const Projects = require('../../models/TaskComments')

const { taskCommentSchema } = require('../../validations/TaskComments');
const addUser = async(req,res,next)=>{
    try{
        const {id} = req.user;
        const { task_id} = req.params;
        const {error,value} = taskCommentSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ message : error.details[0].message });
            }
        value.commented_by=id;
        value.task_id=task_id;
        const project = await Projects.create(value);
        return res.json(project)
    }catch(e){
        next(e);
    }

}
module.exports = addUser;