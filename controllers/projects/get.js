const sequelize = require("../../config/database");
const { QueryTypes } = require("sequelize");

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = `select p.name as name,p.description,p.priority,p.start_date,
    p.end_date,p.images,u.name as user_name,u.id as user_id,u.email as user_email,u.profile_image,
     s.name as status_name,s.color as status_color from "projects" p
    left join status s on s.id =p.status_id
    left join project_members pm on pm.project_id = p.id
    left join users u on u.id =pm.user_id
    where p.id =:id`;

    const data = await sequelize.query(query, { replacements: { id: id }, type: QueryTypes.SELECT });

    const program = {
      ...data[0],
      project_members: data.map(row => ({
        user_id: row.user_id,
        name: row.user_name,
        email: row.user_email,
        profile_image: row.profile_image,
      }))
    };

    res.json(program);
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
