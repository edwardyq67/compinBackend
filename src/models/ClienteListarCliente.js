const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ClienteListarCliente = sequelize.define('clienteListarCliente', {

    Usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    E_Mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Skype: {
        type: DataTypes.STRING,
        allowNull: false
    },Cumpleaños: {
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
    Entel: {
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
    Pais: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Provincia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Distrito: {
        type: DataTypes.STRING,
        allowNull: false
    },
    C_postal: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Dirección: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Referencia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    RUC: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Obs_Direccion_Empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Razon_Comercial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Razon_Social: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Obs_direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cargo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Aniversario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Rubro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Codigo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Tipos_Cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Status_atencion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Origen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Web: {
        type: DataTypes.STRING,
        allowNull: false
    },
    C_presentacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    Catalogo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    P_presentacion: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
});

module.exports = ClienteListarCliente;