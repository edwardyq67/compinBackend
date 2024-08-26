const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ClienteReporteEmail = sequelize.define('clienteReporteEmail', {
    compañia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_envio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_lectura: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Gmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Clics: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_registro: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ClienteReporteEmail;