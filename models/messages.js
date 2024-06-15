const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Organisation = sequelize.define(
  "messages",
  {
    sender: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      media: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      is_deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
      }
  },
  {
    tableName: "messages",
    timestamps: true,
  }
);

// Organisation.sync({alter: true});
module.exports = Organisation;
