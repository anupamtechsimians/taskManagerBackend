
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path based on your Sequelize setup

const userOtp = sequelize.define('UserOtp', {
    user_id: {
        type: DataTypes.INTEGER,
        field: 'user_id'
    },
   
    otp: {
        type: DataTypes.STRING,
        field: 'otp'
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        field: 'isVerified'
    },
}, {
  tableName: 'UserOtp', 
  timestamps: true 
});
// Notifications.sync({alter:true}).then(()=>{console.log('synced..')}).catch((err)=>{console.log(err)});
module.exports = userOtp;
