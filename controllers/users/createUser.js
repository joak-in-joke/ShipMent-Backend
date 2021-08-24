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

const createUser = async (req, res = response) => {
  const {
    tipo,
    nombre,
    apellido,
    rut,
    email,
    estado,
    cargo,
    ciudad,
    telefono,
    pass,
    permisos,
  } = req.body;
  try {
    const getMail = await DataUsuario.findOne({
      where: { email },
    });
    if (getMail) {
      res.json({ resultado: false, message: "Email ingresado existente" });
    } else {
      const newUser = await Usuario.create(
        {
          tipo,
        },
        {
          fields: ["tipo"],
          attributes: ["id"],
        }
      );
      if (newUser) {
        const user_token = jwt.sign({ id: newUser.id }, config.SECRET, {
          expiresIn: 120,
        });
        DataUsuario.create(
          {
            id_usuario: newUser.id,
            nombre,
            apellido,
            rut,
            email,
            cargo,
            estado,
            ciudad,
            telefono,
            pass: await encryptPassword(pass),
          },
          {
            fields: [
              "id_usuario",
              "nombre",
              "apellido",
              "rut",
              "email",
              "cargo",
              "estado",
              "ciudad",
              "telefono",
              "pass",
            ],
          }
        );
        PermisosUsuario.create(
          {
            id_usuario: newUser.id,
            perm_finanza: permisos.finanzas,
            perm_misiones: permisos.misiones,
            perm_superuser: permisos.superuser,
            perm_admin: permisos.admin,
          },
          {
            fields: [
              "id_usuario",
              "perm_finanza",
              "perm_misiones",
              "perm_superuser",
              "perm_admin",
            ],
          }
        );
        res.json({
          resultado: true,
          message: "Usuario creado",
          token: user_token,
        });
      } else {
        res.status(500).json({
          resultado: false,
          message: "Oops algo salio mal :(",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = createUser;
