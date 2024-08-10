const express = require('express');
const userRouter = require('./user.router');
const routerClienteListarCliente = require('./clienteListarCliente');
const router = express.Router();

// colocar las rutas aquí
router.use("/user",userRouter);
router.use('/cliente/listarCliente',routerClienteListarCliente)
module.exports = router;