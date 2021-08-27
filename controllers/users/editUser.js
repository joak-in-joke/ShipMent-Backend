const { response } = require("express");
var models = require("../../models");
var Usuario = models.Usuarios;
var DataUsuario = models.DataUsuario;
var PermisosUsuario = models.Permisos;

const editUser = async (req, res = response) => {
  const {
    id,
    tipo,
    nombre,
    apellido,
    rut,
    email,
    estado,
    cargo,
    ciudad,
    telefono,
    permisos,
  } = req.body;
  try {
    const updateUser = await Usuario.update(
      {
        tipo,
      },
      {
        where: { id },
      }
    );
    const UpdateCuenta = await DataUsuario.update(
      {
        tipo,
        nombre,
        apellido,
        rut,
        email,
        estado,
        cargo,
        ciudad,
        telefono,
      },
      {
        where: { id_usuario: id },
      }
    );
    const UpdatePermisos = PermisosUsuario.update(
      {
        perm_finanza: permisos.finanzas,
        perm_misiones: permisos.misiones,
        perm_superuser: permisos.superuser,
        perm_admin: permisos.admin,
      },
      {
        where: { id_usuario: id },
      }
    );

    res.json({
        resultado: true,
        message: "Usuario actualizado.",
      });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = editUser;
