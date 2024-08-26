const express = require('express');
const userRouter = require('./user.router');
const routerClienteListarCliente = require('./clienteListarCliente');
const routerAsistencia = require('./asistencia.router');
const routerClienteRequerimiento = require('./clienteRequerimiento');
const routerClienteReporteEmail = require('./clienteReporteEmail.route');
const routerProvedores = require('./provedores.route');
const router = express.Router();

// colocar las rutas aquí
router.use("/user",userRouter);
router.use('/cliente/listarCliente',routerClienteListarCliente)
router.use('/asistencia',routerAsistencia)
router.use('/cliente/requirimiento',routerClienteRequerimiento)
router.use('/cliente/reporteEmail',routerClienteReporteEmail)

router.use('/provedores',routerProvedores)
module.exports = router;