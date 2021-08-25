const jwt = require("jsonwebtoken");
const config = require("../../config");

var models = require("../../models");
var DataUsuario = models.DataUsuario;
var PermisosUsuario = models.Permisos;

export const verifyToken = async (req, res) => {
  const token = req.body.token;
  !token &&
    res.json({
      resul: null,
      cod_rol: "",
      message: "Ha ocurrido un problema con la autenticación",
    });
  let verifyDecoded = null;
  const aux = jwt.verify(token, config.SECRET, (err) => {
    verifyDecoded = err;
  });
  if (verifyDecoded !== null) {
    res.json({ resul: null, cod_rol: "", message: "Su sesión ha expirado" });
  } else {
    const decoded = jwt.verify(token, config.SECRET);
    let id = decoded.id;
    const user = await usuarios.findOne({
      where: { id },
      attributes: ["roles_id"],
    });
    id = user.roles_id;
    const rol = await roles.findOne({
      where: { id },
      attributes: ["cod_rol"],
    });
    rol.cod_rol === "adm"
      ? res.json({ resul: true, cod_rol: rol.cod_rol, message: "" })
      : res.json({
          resul: false,
          cod_rol: rol.cod_rol,
          message:
            "Su usuario no se encuentra autorizado para acceder a esta interfaz",
        });
  }
};

module.exports = verifyToken;
