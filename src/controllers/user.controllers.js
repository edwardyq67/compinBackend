const catchError = require('../utils/catchError');
const User = require('../models/User');
const bcrypt = require('bcrypt');// encriptar
const jwt = require('jsonwebtoken');
const Asistencia = require('../models/Asistencia');
const getAll = catchError(async (req, res) => {
    const results = await User.findAll({ include: [Asistencia] });
    return res.json(results);
});

const create = catchError(async (req, res) => {
    const { usuario, correo, password } = req.body;
    const encriptedPassword = await bcrypt.hash(password, 10)
    const result = await User.create({
        usuario,
        correo,
        password: encriptedPassword
    });
    return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
    const { id } = req.params;
    const result = await User.findByPk(id,{
        include:[Asistencia]
    });
    if (!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async (req, res) => {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
    const { id } = req.params;
    const { correo, usuario } = req.body;
    const result = await User.update(
        { correo, usuario },
        { where: { id }, returning: true }
    );
    if (result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const login = catchError(async (req, res) => {
    const { usuario, password } = req.body;
    const user = await User.findOne({ where: { usuario: usuario }, include: [Asistencia] });
    if (!user) return res.status(401).json({ message: "No existe el usuario" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Contraseña incorrecta" });

    const today = new Date().toISOString().split('T')[0]; // Obtén la fecha de hoy en formato YYYY-MM-DD
    const lastLoginDate = user.lastLogin ? new Date(user.lastLogin).toISOString().split('T')[0] : null;

    // Si la fecha actual es diferente de lastLogin, actualiza lastLogin con la fecha y hora actual
    if (lastLoginDate !== today) {
        user.lastLogin = new Date(); // Actualiza lastLogin con la fecha y hora actual
    }

    await user.save();
    
    const token = jwt.sign(
        { user },
        process.env.TOKEN_SECRET,
        { expiresIn: "1d" }
    );
    
    return res.json({ user: user, token: token });
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

// const setAsistencia = catchError((async (req, res) => {
//     const { id } = req.params;
//     const usuarioAsistencia = await User.findByPk(id);
//     await usuarioAsistencia.setAsistencias(req.body);
//     const asistencia = await usuarioAsistencia.getAsistencias(User);
//     return res.json(asistencia);
// }))
// const updateAsistencia = catchError(async (req, res) => {
//     const { id } = req.params; // ID del usuario
//     const { asistenciaId } = req.body; // ID de la asistencia a actualizar
//     const datosActualizados = req.body; // Nuevos datos para actualizar

//     // Encontrar al usuario por ID
//     const usuarioAsistencia = await User.findByPk(id);
//     if (!usuarioAsistencia) {
//         return res.status(404).json({ message: "Usuario no encontrado" });
//     }

//     // Encontrar la asistencia específica que deseas actualizar
//     const asistencia = await Asistencia.findOne({
//         where: {
//             id: asistenciaId, // ID de la asistencia
//             userId: id // Asegúrate de que pertenezca al usuario correcto
//         }
//     });

//     if (!asistencia) {
//         return res.status(404).json({ message: "Asistencia no encontrada" });
//     }

//     // Actualizar los datos de la asistencia
//     await asistencia.update(datosActualizados);

//     return res.json({ message: "Asistencia actualizada", asistencia });
// });

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login,
    logout
    // setAsistencia,
    // updateAsistencia
}