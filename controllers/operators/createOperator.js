const { response } = require("express");
var sequelize = require("sequelize");

var models = require("../../models");
var OperadorLogistico = models.OperadorLogistico;

const createOperator = async (req, res = response) => {
  const { nombre } = req.body;
  try {
    operator = await OperadorLogistico.create(
      {
        nombre,
      },
      {
        fields: ["nombre"],
      }
    );
    return res.json({ resultado: true, id: operator.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = createOperator;
