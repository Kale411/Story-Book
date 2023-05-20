const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class story extends Model {}

story.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title:
        {
            type: DataTypes.String,
            allowNull: false
        },
        content:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            references:
            {
                model:'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'story'
    }
);

module.exports = story;