const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class user extends Model {
    checkPwd(loginPwd){
        return bcrypt.compareSync(loginPwd, this.password);
    }
}

user.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username:
        {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                len: [6]
            }
        }
    },
    {
        hooks:
        {
            async beforeCreate(newUser){
                newUser.password = await bcrypt.hash(newUser.password, 10);
                return newUser;
            },
            async beforeUpdate(updatedUser){
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
                return updatedUser;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

model.exports = user;