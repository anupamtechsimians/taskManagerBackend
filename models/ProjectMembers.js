const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Organisation = sequelize.define('project_members', {
    project_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:false
    },

}, {
    tableName: 'project_members',
    timestamps: true
},{
    indexes: [
        {
            unique: true,
            fields: ['project_id', 'user_id']
        }
    ]
});

// Organisation.sync({alter: true});
module.exports = Organisation;
