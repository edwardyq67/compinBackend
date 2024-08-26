const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ClienteRequerimiento = sequelize.define('clienteRequerimiento', {
    Usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_requerimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Requerimiento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_respuesta_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_atencion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Url_pagina: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ClienteRequerimiento;