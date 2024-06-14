const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Organisation = sequelize.define('boards', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true
    },
    org_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:true
    },

}, {
    tableName: 'boards',
    timestamps: true
});

// Organisation.sync({alter: true});
module.exports = Organisation;
