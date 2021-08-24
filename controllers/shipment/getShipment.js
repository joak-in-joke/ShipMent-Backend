const { response } = require("express");

var models = require("../../models");
var Embarque = models.Embarque;
var DataEmbarque = models.DataEmbarque;
var TransbordoData = models.TransbordoData;
var Puerto = models.Puerto;
var OperadorLogistico = models.OperadorLogistico;
var AgenciaAduana = models.AgenciaAduana;

const getShipment = async (req, res = response) => {
  var id = req.params.id;
  try {
    const Shipment = await Embarque.findOne({
      where: { id },
      include: [
        {
          model: DataEmbarque,
          include: [
            {
              model: TransbordoData,
            },
            {
              model: Puerto,
            },
            {
              model: OperadorLogistico,
            },
            {
              model: AgenciaAduana,
            },
          ],
        },
      ],
    });

    res.json({ resultado: true, data: Shipment });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getShipment;
