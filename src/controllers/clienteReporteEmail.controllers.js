const catchError = require('../utils/catchError');
const ClienteReporteEmail = require('../models/ClienteReporteEmail');

const getAll = catchError(async(req, res) => {
    const results = await ClienteReporteEmail.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await ClienteReporteEmail.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ClienteReporteEmail.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ClienteReporteEmail.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await ClienteReporteEmail.update(
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