const catchError = require('../utils/catchError');
const ClienteListarCliente = require('../models/ClienteListarCliente');

const getAll = catchError(async(req, res) => {
    const results = await ClienteListarCliente.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await ClienteListarCliente.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ClienteListarCliente.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ClienteListarCliente.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ClienteListarCliente.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}