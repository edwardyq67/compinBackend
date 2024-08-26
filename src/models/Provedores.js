const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Provedores = sequelize.define('provedores', {
    Usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    F_atencion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Rubro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Prioridad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Entel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Ruc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Celular: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RPC: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RPM: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Web: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Entel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Direccion_Empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Deferencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Distrito: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Provedores;