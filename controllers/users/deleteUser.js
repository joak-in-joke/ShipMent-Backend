const { response } = require("express");

var models = require("../../models");
var Usuario = models.Usuarios;

const deleteUser = async (req, res = response) => {
  const { id } = req.body;
  try {
    await Usuario.destroy({
      where: { id },
    });

    res.json({ resultado: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ resultado: false, message: error });
  }
};

module.exports = deleteUser;
