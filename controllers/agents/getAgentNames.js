const { response } = require("express");

var models = require("../../models");
var AgenciaAduana = models.AgenciaAduana;

const getAgent = async (req, res = response) => {
  try {
    const agent = await AgenciaAduana.findAll({});
    res.json({ resultado: true, agent: agent });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getAgent;
