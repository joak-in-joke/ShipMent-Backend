const { response } = require("express");

var models = require("../../models");
var Mision = models.Misions;

const getMisions = async (req, res = response) => {
  try {
    const misions = await Mision.findAll({});
    res.json({ resultado: true, misions: misions });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getMisions;
