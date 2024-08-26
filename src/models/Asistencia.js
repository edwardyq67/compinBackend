const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Asistencia = sequelize.define('asistencia', {
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horarioInicio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    horarioSalida: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // userId
});

module.exports = Asistencia;