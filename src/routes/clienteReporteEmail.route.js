const { getAll, create, getOne, remove, update } = require('../controllers/clienteReporteEmail.controllers');
const express = require('express');

const routerClienteReporteEmail = express.Router();

routerClienteReporteEmail.route('/')
    .get(getAll)
    .post(create);

routerClienteReporteEmail.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerClienteReporteEmail;