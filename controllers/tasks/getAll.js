const sequelize = require('../../config/database')
const {QueryTypes} = require('sequelize')

const getAllUsers= async (req, res, next) => {
    const {org_id} = req.user;
    try {
        const { start = 0, limit = 10,user_id,search,id_deleted } = req.query;
        const limitQuery = `LIMIT ${limit} OFFSET ${start}`;
        const searchQuery = search?` and (t.title ilike '%${search}%'`:``;
        const isActive = id_deleted?` and t.is_deleted =${id_deleted}`:'and t.is_deleted =false';
        const userFilter = user_id?` and t.user_id =${user_id}`:'';

        const query = `select * from "tasks" t where t.org_id = ${org_id} ${isActive} ${userFilter} ${searchQuery} ${limitQuery}`;

        const countQuery = `select count(*) as count 
        from "tasks" t where t.org_id = ${org_id} ${isActive} ${userFilter}  ${searchQuery} ${limitQuery}`;
    
      const data = await sequelize.query(query,{type:QueryTypes.SELECT});
      const count = await sequelize.query(countQuery,{type:QueryTypes.SELECT});
    
      res.json({count:+count[0]?.count,rows:data});
    } catch (err) {
      next(err);
    }
  };

  module.exports = getAllUsers;