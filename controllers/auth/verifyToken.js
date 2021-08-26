const jwt = require("jsonwebtoken");
const config = require("../../config");

var models = require("../../models");
var DataUsuario = models.DataUsuario;

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    !token &&
      res.json({
        resultado: false,
        message: "Ha ocurrido un problema con la autenticación",
      });
    const decoded = jwt.verify(token, config.SECRET);
    const id = decoded.id;
    req.id = id;
    const user = await DataUsuario.findOne({
      where: { id },
      attributes: ["id", "rut", "nombre", "apellido"],
    });
    !user &&
      res.json({ resultado: false, message: "No se encuentra el usuario" });
    next();
  } catch (error) {
    console.log(error);
    res.json({
      resultado: false,
      message: "Ha ocurrido un problema, token expirado",
    });
  }
};

module.exports = verifyToken;
