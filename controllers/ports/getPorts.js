const { response } = require("express");

var models = require("../../models");
var Puerto = models.Puerto;

const getPorts = async (req, res = response) => {
  try {
    const ports = await Puerto.findAll({});
    res.json({ resultado: true, ports: ports });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getPorts;
