const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Organisation = sequelize.define(
  "conversation_members",
  {
    conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      role:{
          type:DataTypes.ENUM(["OWNER","MEMBER"]),
          allowNull:true
      },
      is_deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
      }
  },
  {
    tableName: "conversation_members",
    timestamps: true,
  }
);

// Organisation.sync({alter: true});
module.exports = Organisation;
