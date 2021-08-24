const { response } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../../config");

var models = require("../../models");
var DataUsuario = models.DataUsuario;
var PermisosUsuario = models.Permisos;


const signIn = async (req, res) => {
  const { email, pass } = req.body;
  const user = await DataUsuario.findOne({
    where: { email },
  });
  if (user) {
    let user_token = null;
    if (user.pass === pass) {
      user_token = jwt.sign({ id: user.id_usuario }, config.SECRET, {
        expiresIn: "12h",
      });
      res.cookie("token", user_token, { httpOnly: true });
      
      const permisos = await PermisosUsuario.findOne({
        where: { id_usuario: user.id_usuario },
        attributes: [
          "perm_finanzas",
          "perm_misiones",
          "perm_superuser",
          "perm_admin",
        ],
      });
      
      const result = {
        id: user.id_usuario,
        nombre: user.nombre,
        apellido: user.apellido,
        rut: user.rut,
        email: user.email,
        estado: user.estado,
        cargo: user.cargo,
        ciudad: user.ciudad,
        telefono: user.ciudad,
        permisos,
      };
      res.json({ resultado: true, usuario: result, token: user_token });
    } else {
      res.json({ resultado: false, message: "Credenciales incorrectas" });
    }
  } else {
    res.json({ resultado: false, message: "Credenciales incorrectas" });
  }
};

module.exports = signIn;
