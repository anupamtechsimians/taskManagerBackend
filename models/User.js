const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "users",
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
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull: true,
    },
    profile_image:{type:DataTypes.STRING},
    org_id:{type:DataTypes.INTEGER},
    created_by:{type:DataTypes.INTEGER},
    metaData: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);
// User.sync({alter:true}).then(()=>{console.log("table synced")}).catch((err)=>{console.log(err)})

module.exports = User;
