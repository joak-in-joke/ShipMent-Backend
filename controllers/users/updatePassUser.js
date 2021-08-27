const { response } = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../../config");
var models = require("../../models");
var Usuario = models.Usuarios;
var DataUsuario = models.DataUsuario;
var PermisosUsuario = models.Permisos;

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const updatePassword = async (req, res = response) => {
  const { id, password, newPassword } = req.body;
  try {
    const User = await Usuario.findOne({ where: { id } });

    const DataUser = await User.findOne({ where: { id_usuario: User.id } });

    if (DataUser.pass == (await encryptPassword(password))) {
      await DataUsuario.update(
        {
          pass: await encryptPassword(newPassword),
        },
        { where: { id_usuario: User.id } }
      );
    } else {
      res.status(500).json({
        resultado: false,
        message: "La contraseña no es correcta",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ resultado: false, message: error });
  }
};

module.exports = updatePassword;
