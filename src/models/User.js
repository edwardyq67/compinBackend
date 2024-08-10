const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const User = sequelize.define('user', {
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },

    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastLogin: {
        type: DataTypes.DATE, 
        allowNull: true
    },
    lastLogout: {
        type: DataTypes.DATE,
        allowNull: true
    }
});
User.prototype.toJSON = function(){
    const values=Object.assign({},this.get());
    delete values.password;
    return values;
}
module.exports = User;  