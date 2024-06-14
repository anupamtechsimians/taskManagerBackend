// models/inquiry.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Task = sequelize.define('tasks', {
 
  priority: {
    type: DataTypes.ENUM(['LOW',"MEDIUM","HIGH"]),
    allowNull: true,
  },
  board_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  assigned_to: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  assigned_by: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  due_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  documents: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue:{}
  },
  is_deleted:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  org_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

},{
    tableName: 'tasks', // Make sure to set the correct table name
    timestamps: true 
  });
//   Task.sync({alter:true}).then(sa=>{console.log("------")})
  module.exports = Task;
