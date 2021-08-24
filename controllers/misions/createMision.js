const { response } = require("express");
var sequelize = require("sequelize");

var models = require("../../models");
var Misions = models.Misions;

const createMision = async (req, res = response) => {
  const { contenido } = req.body;
  try {
    const newMision = await Misions.create(
      {
        contenido,
        creado: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        fields: ["contenido", "creado"],
      }
    );
    if (newMision) {
      return res.json({ resultado: true });
    } else {
      console.log(error)
      res.status(500).json({ resultado: false, message: "Ocurrio un error." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = createMision;
