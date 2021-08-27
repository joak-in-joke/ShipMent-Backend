const { response } = require("express");
var sequelize = require("sequelize");

var models = require("../../models");
var AgenciaAduana = models.AgenciaAduana;

const createAgent = async (req, res = response) => {
  const { nombre } = req.body;
  try {
    agent = await AgenciaAduana.create(
      {
        nombre,
      },
      {
        fields: ["nombre"],
      }
    );
    return res.json({ resultado: true, id: agent.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = createAgent;
