const { response } = require("express");

var models = require("../../models");
var OperadorLogistico = models.OperadorLogistico;

const getOperator = async (req, res = response) => {
  try {
    const operator = await OperadorLogistico.findAll({});
    res.json({ resultado: true, operator: operator });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getOperator;
