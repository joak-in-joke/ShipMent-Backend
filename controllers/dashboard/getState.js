const { response } = require("express");
var sequelize = require("sequelize");

var models = require("../../models");
var Embarque = models.Embarque;

const getState = async (req, res = response) => {
  try {
    const allOrigen = await Embarque.findAll({
      where: {
        estado: 1,
      },
    });
    const allAbordos = await Embarque.findAll({
      where: {
        estado: 2,
      },
    });
    const allLlegadas = await Embarque.findAll({
      where: {
        estado: 3,
      },
    });
    const allFinalizados = await Embarque.findAll({
      where: {
        estado: 4,
      },
    });
    const Estado = {
      Origen: allOrigen.length,
      Abordos: allAbordos.length,
      Llegadas: allLlegadas.length,
      Finalizados: allFinalizados.length,
    };
    res.json({ resultado: true, data: Estado });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = getState;
