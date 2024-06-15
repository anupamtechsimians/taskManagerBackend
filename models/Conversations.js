const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Organisation = sequelize.define(
  "conversations",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.ENUM(["SINGLE", "GROUP"]),
      allowNull: false,
      defaultValue: "SINGLE",
    },
    user1:{type:DataTypes.INTEGER},
    user2:{type:DataTypes.INTEGER},
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    org_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
    },
  },
  {
    tableName: "conversations",
    timestamps: true,
  }
);

// Organisation.sync({alter: true});
module.exports = Organisation;
