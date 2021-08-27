const { response } = require("express");
var sequelize = require("sequelize");

var models = require("../../models");
var Puerto = models.Puerto;

const createPort = async (req, res = response) => {
  const { nombre, tipo } = req.body;
  try {
    await Puerto.create(
      {
        nombre,
        tipo,
      },
      {
        fields: ["nombre", "tipo"],
      }
    );
    return res.json({ resultado: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = createPort;
