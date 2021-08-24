const { response } = require("express");

var models = require("../../models");
var Misions = models.Misions;

const deleteMision = async (req, res = response) => {
  const { id } = req.body;
  try {
    const deleteMision = await Misions.destroy({
      where: {
        id,
      },
    });
    res.json({
      resultado: true,
      message: "Mision eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = deleteMision;