const { getAll, create, getOne, remove, update } = require('../controllers/provedores.controllers');
const express = require('express');

const routerProvedores = express.Router();

routerProvedores.route('/')
    .get(getAll)
    .post(create);

routerProvedores.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerProvedores;