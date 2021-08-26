const { response } = require("express");

var models = require("../../models");
var Embarque = models.Embarque;

const getShipments = async (req, res = response) => {
  try {
    const allShipments = await Embarque.findAll({
      attributes: ["id", "estado", "referencia", "etd", "eta"],
      order: [["id", "DESC"]],
    });

    res.json({ resultado: true, data: allShipments });
  } catch (error) {
    console.log(error);
    res.json({ resultado: false, message: error });
  }
};

module.exports = getShipments;
