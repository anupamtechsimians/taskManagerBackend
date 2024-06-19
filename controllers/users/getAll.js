const sequelize = require('../../config/database')
const {QueryTypes} = require('sequelize')

const getAllUsers= async (req, res, next) => {
    const {org_id} = req.user;
    try {
        const { start = 0, limit = 10,id_deleted,search } = req.query;
        const limitQuery = `LIMIT ${limit} OFFSET ${start}`;
        const searchQuery = search?` and (u.name ilike '%${search}%'`:``;
        const isActive = id_deleted?` and u.is_deleted =${id_deleted}`:'and u.is_deleted =false';

        const query = `select * from "users" u where u.org_id = ${org_id} ${isActive}  ${searchQuery} ${limitQuery}`;

        const countQuery = `select count(*) as count 
        from "user" u where u.org_id = ${org_id} ${isActive}  ${searchQuery} ${limitQuery}`;
    
      const data = await sequelize.query(query,{type:QueryTypes.SELECT});
      const count = await sequelize.query(countQuery,{type:QueryTypes.SELECT});
    
      res.json({count:+count[0]?.count,rows:data});
    } catch (err) {
      next(err);
    }
  };

  module.exports = getAllUsers;