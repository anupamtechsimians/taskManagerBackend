// models/inquiry.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Task = sequelize.define('task_comments', {
 
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  commented_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  media:{
    type:DataTypes.JSON,
    defaultValue:{}
  },
  is_deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },

},{
    tableName: 'task_comments', // Make sure to set the correct table name
    timestamps: true 
  });
  // Task.sync({alter:true}).then(sa=>{console.log("------")})
  module.exports = Task;
