const catchError = require('../utils/catchError');
const Asistencia = require('../models/Asistencia');

const getAll = catchError(async(req, res) => {
    const results = await Asistencia.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {fecha,horarioInicio,horarioSalida}=req.body;
    const userId=req.user.id;
    const result = await Asistencia.create({fecha,horarioInicio,horarioSalida,userId});
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Asistencia.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Asistencia.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Asistencia.update(
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