const { response } = require("express");

var models = require("../../models");
var Embarque = models.Embarque;
var DataEmbarque = models.DataEmbarque;
var TransbordoData = models.TransbordoData;
var Puerto = models.Puerto;
var OperadorLogistico = models.OperadorLogistico;
var AgenciaAduana = models.AgenciaAduana;
var ValorData = models.ValorData;
var DataLCL = models.DataLCL;
var DataFCL = models.DataFCL;

const getShipment = async (req, res = response) => {
  var id = req.params.id;
  var mediaData;
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
            {
              model: ValorData,
            },
            {
              model: DataFCL,
              include: [{ model: Puerto }],
            },
            {
              model: DataLCL,
              include: [{ model: Puerto }],
            },
          ],
        },
      ],
    });

    // switch (Shipment.media_transporte) {
    //   case "FCL":
    //     mediaData = DataFCL.findOne({ where: { id_data: Shipment.id } });
    //     break;
    //   case "LCL":
    //     mediaData = DataFCL.findOne({ where: { id_data: Shipment.id } });
    //     break;
    // }

    res.json({ resultado: true, data: { Shipment, mediaData } });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getShipment;
