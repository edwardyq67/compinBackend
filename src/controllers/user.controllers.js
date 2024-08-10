const catchError = require('../utils/catchError');
const User = require('../models/User');
const bcrypt = require('bcrypt');// encriptar
const jwt=require('jsonwebtoken');
const getAll = catchError(async(req, res) => {
    const results = await User.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const {usuario,correo,password}=req.body;
    const encriptedPassword= await bcrypt.hash(password,10)
    const result = await User.create({
        usuario,
        correo,
        password: encriptedPassword
    });
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await User.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const {correo,usuario}=req.body;
    const result = await User.update(
        {correo,usuario},
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const login = catchError(async(req, res) => {
    const {usuario,password}=req.body;
    const user=await User.findOne({where: {usuario:usuario}})
    if(!user)return res.status(401).json({message:"no existe el usuario"});
    const isValid=await bcrypt.compare(password, user.password)
    if(!isValid)return res.status(401).json({message:"no existe el usuario"});
    user.lastLogin = new Date();
    await user.save();
    const token = jwt.sign(
        {user},
        process.env.TOKEN_SECRET,
        {expiresIn: "1d"}
    );
    return res.json({user:user,token:token});
});
const logout = catchError(async (req, res) => {
    const { userId } = req.body; // Asume que envías el ID del usuario desde el frontend

    // Encontrar al usuario por ID
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    // Actualizar el campo lastLogout con la fecha y hora actual
    user.lastLogout = new Date();
    await user.save();

    // Opcional: Eliminar el token o realizar cualquier otra operación de cierre de sesión

    return res.json({ message: "Cierre de sesión exitoso" });
});
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login,
    logout
}