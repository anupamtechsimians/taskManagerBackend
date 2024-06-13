const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isSuper: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: true,
    },
    parent_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    org_id:{type:DataTypes.INTEGER},
    metaData: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "user",
    timestamps: true,
  }
);
// User.sync({alter:true}).then(()=>{console.log("table synced")}).catch((err)=>{console.log(err)})

module.exports = User;
