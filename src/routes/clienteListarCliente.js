const { getAll, create, getOne, remove, update } = require('../controllers/clienteListarCliente.controllers');
const express = require('express');

const routerClienteListarCliente = express.Router();

routerClienteListarCliente.route('/')
    .get(getAll)
    .post(create);

routerClienteListarCliente.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerClienteListarCliente;