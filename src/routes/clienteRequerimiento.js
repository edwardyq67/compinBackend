const { getAll, create, getOne, remove, update } = require('../controllers/clienteRequerimiento.controllers');
const express = require('express');

const routerClienteRequerimiento = express.Router();

routerClienteRequerimiento.route('/')
    .get(getAll)
    .post(create);

routerClienteRequerimiento.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerClienteRequerimiento;