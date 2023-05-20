const {Model, DataTypes} = reequire('sequelize');
const sequelize = require('../config/connection');

class comment extends Model {}

comment.init({
    id: 
    {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text:
    {
        type: DataTypes.STRING,
        validate:
        {
            len: [3]
        }
    },
    user_id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
        {
            model: 'user',
            key: 'id'
        }
    },
    story_id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
        {
            model: 'post',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

module.exports = comment;