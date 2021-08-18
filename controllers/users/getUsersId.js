const { response } = require("express");

var models = require("../../models");
var Usuario = models.Usuarios;
var DataUsuario = models.DataUsuario;
var PermisosUsuario = models.Permisos;

const getUsersId = async (req, res = response) => {
    const { id } = req.params;
  try {
    const user = await Usuario.findOne({
      where: { id },
      include: [{
          model: DataUsuario,
        //   as: "Data",
        //   required: true,
      }, {
          model: PermisosUsuario,
        //   as: "Permisos",
        //   required: true,
      }]
    });

    res.json({ resultado: true, user });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getUsersId;
