const sequelize = require('../../config/database')
const {QueryTypes} = require('sequelize')

const getAllUsers= async (req, res, next) => {
    const {task_id} = req.params;
    try {
        const { start = 0, limit = 10,id_deleted,search } = req.query;
        const limitQuery = `LIMIT ${limit} OFFSET ${start}`;
        const searchQuery = search?` and (t.comment ilike '%${search}%'`:``;

        const query = `select * from "task_comments" t where t.task_id = ${task_id} ${searchQuery} ${limitQuery}`;

        const countQuery = `select count(*) as count 
        from "task_comments" t where t.task_id = ${task_id} ${searchQuery} ${limitQuery}`;
    
      const data = await sequelize.query(query,{type:QueryTypes.SELECT});
      const count = await sequelize.query(countQuery,{type:QueryTypes.SELECT});
    
      res.json({count:+count[0]?.count,rows:data});
    } catch (err) {
      next(err);
    }
  };

  module.exports = getAllUsers;