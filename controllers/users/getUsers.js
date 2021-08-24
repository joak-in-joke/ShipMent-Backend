const { response } = require("express");

var models = require("../../models");
var Usuario = models.Usuarios;
var DataUsuario = models.DataUsuario;

const getUsers = async (req, res = response) => {
  try {
    const allUsers = await Usuario.findAll({
      attributes: ["id", "tipo"],
      include: {
        model: DataUsuario,
      },
      order: [["id", "DESC"]],
    });
    res.json({ resultado: true, users: allUsers });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getUsers;
