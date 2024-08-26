const Asistencia = require("./Asistencia");
const User = require("./User");

User.hasMany(Asistencia)
Asistencia.belongsTo(User)