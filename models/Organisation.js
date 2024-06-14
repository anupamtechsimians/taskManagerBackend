const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Organisation = sequelize.define('organisation', {
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true
    },
    logoUrl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ownerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user', 
            key: 'id' 
        }
    },
    metaData:
    {type:DataTypes.JSON, allowNull: true},
    setup_flag: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:false
    },
}, {
    tableName: 'organisations',
    timestamps: true
});

// Organisation.sync({alter: true});
module.exports = Organisation;
