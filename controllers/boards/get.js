const sequelize = require("../../config/database");
const { QueryTypes } = require("sequelize");

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const query = `select * from "boards" u where u.id = ${id}`;

    const data = await sequelize.query(query, { type: QueryTypes.SELECT });

    res.json(data[0]||{});
  } catch (err) {
    next(err);
  }
};

module.exports = getUser;
