const { response } = require("express");

var models = require("../../models");
var Embarque = models.Embarque;
var DataEmbarque = models.DataEmbarque;
var TransbordoData = models.TransbordoData;
var Puerto = models.Puerto;
var OperadorLogistico = models.OperadorLogistico;
var AgenciaAduana = models.AgenciaAduana;
var ProveedorCliente = models.ProveedorCliente;
var DataLCL = models.DataLCL;
var DataFCL = models.DataFCL;
var ValorData = models.ValorData;

const updateShipment = async (req, res = response) => {
  var {
    id,
    estado,
    n_operacion,
    tipo_operacion,
    medio_transporte,
    eta,
    etd,
    referencia,
    incoterm,
    id_puerto_embarque,
    id_operador,
    id_importador,
    id_exportador,
    id_agencia_aduana,
    tipo_documento,
    documento,
    motonave,
    viaje,
    naviera,
    reserva,
    valor_cif,
    id_puerto_destino,
    lugardestino,
    deposito_contenedores,
    cont_tipo,
    sello,
    contenedor,
    cant_bultos,
    peso,
    volumen,
    mercancias, // array
    transbordos, //array
  } = req.body;
  try {
    const Shipment = await Embarque.update(
      {
        n_operacion,
        estado,
        referencia,
        etd,
        eta,
        media_transporte: medio_transporte,
      },
      { where: { id } }
    );

    await DataEmbarque.update(
      {
        id_puerto_embarque: id_puerto_embarque,
        id_exportador: id_importador,
        id_importador: id_exportador,
        id_operador: id_operador,
        id_agencia: id_agencia_aduana,
        tipo_operacion: tipo_operacion,
        incoterm: incoterm,
        tipo_documento: tipo_documento,
        documento: documento,
        motonave: motonave,
        viaje: viaje,
        naviera: naviera,
        reserva: reserva,
        valor_cif: valor_cif,
      },
      { where: { id_embarque: id } },
      { attributes: ["id"] }
    );

    const DataShipment = await DataEmbarque.findOne({
      where: { id_embarque: id },
    });

    await ValorData.destroy({
      where: { id_data: DataShipment.id },
    });
    if (mercancias) {
      mercancias.map((item) => {
        ValorData.create(
          {
            id_data: DataShipment.id,
            nombre_mercancia: item.nombre_mercancia,
            valor_usd: item.valor_usd,
            flete_usd: item.flete_usd,
            seguro_usd: item.seguro_usd,
          },
          {
            fields: [
              "id_data",
              "nombre_mercancia",
              "valor_usd",
              "flete_usd",
              "seguro_usd",
            ],
            attributes: ["id"],
          }
        );
      });
    }

    await TransbordoData.destroy({
      where: { id_data: DataShipment.id },
    });
    if (transbordos) {
      await transbordos.map((item) => {
        TransbordoData.create(
          {
            id_data: DataShipment.id,
            id_puerto_transbordo: item.id_puerto_transbordo,
            naver_transb: item.naver_transb,
            fecha_transb: item.fecha,
          },
          {
            fields: [
              "id_data",
              "id_puerto_transbordo",
              "naver_transb",
              "fecha_transb",
            ],
            attributes: ["id"],
          }
        );
      });
    }

    switch (medio_transporte) {
      case "FCL":
        await DataFCL.update(
          {
            id_data: DataShipment.id,
            id_puerto_destino: id_puerto_destino,
            deposito_contenedores: deposito_contenedores,
            cont_tipo: cont_tipo,
            sello: sello,
            lugar_destino: lugardestino,
          },
          {
            where: {
              id_data: DataShipment.id,
            },
          }
        );
        break;
      case "LCL":
        await DataLCL.update(
          {
            id_data: DataShipment.id,
            id_puerto_destino: id_puerto_destino,
            contenedor: contenedor,
            cant_bultos: cant_bultos,
            peso: peso,
            volumen: volumen,
            lugar_destino: lugardestino,
          },
          {
            where: { id_data: DataShipment.id },
          }
        );
        break;
    }

    res.json({ resultado: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = updateShipment;
