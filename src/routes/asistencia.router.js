const { getAll, create, getOne, remove, update } = require('../controllers/asistencia.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerAsistencia = express.Router();

routerAsistencia.route('/')
    .get(verifyJWT,getAll)
    .post(verifyJWT,create);

routerAsistencia.route('/:id')
    .get(verifyJWT,getOne)
    .delete(verifyJWT,remove)
    .put(verifyJWT,update);

module.exports = routerAsistencia;