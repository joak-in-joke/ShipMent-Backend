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

const getShipment = async (req, res = response) => {
  var {
    n_operacion,
    medio_transporte,
    eta,
    etd,
    estado,
    referencia,
    tipoOperacion,
    intercom,
    id_puertoembarque,
    id_operador,
    id_importador,
    id_exportador,
    id_agencia_aduana,
    tipo_documento,
    documento,
    motonave,
    viaje,
    naviera,
    transbordo,
    reserva,
    valor_cif,
    fcl,
    lcl,
    mercancias,
    transbordos,
  } = req.body;
  try {
    const newShipment = await Embarque.create(
      {
        n_operacion,
        estado,
        referencia,
        etd,
        eta,
        media_transporte: medio_transporte,
      },
      {
        fields: [
          "n_operacion",
          "estado",
          "referencia",
          "etd",
          "eta",
          "media_transporte",
        ],
        attributes: ["id"],
      }
    );

    const newDataShipment = DataEmbarque.create(
      {
        id_embarque: newShipment.id,
        id_puerto_embarque: id_puertoembarque,
        id_exportador: id_importador,
        id_importador: id_exportador,
        id_operador: id_operador,
        id_agencia: id_agencia_aduana,
        tipo_operacion: tipoOperacion,
        incoterm: intercom,
        tipo_documento: tipo_documento,
        documento: documento,
        motonave: motonave,
        viaje: viaje,
        naviera: naviera,
        transbordo: transbordo,
        reserva: reserva,
        valor_cif: valor_cif,
      },
      {
        fields: [
          "id_embarque",
          "id_puerto_embarque",
          "id_exportador",
          "id_importador",
          "id_operador",
          "id_agencia",
          "tipo_operacion",
          "incoterm",
          "tipo_documento",
          "documento",
          "motonave",
          "viaje",
          "naviera",
          "transbordo",
          "reserva",
          "valor_cif",
        ],
        attributes: ["id"],
      }
    );

    mercancias.map((item) => {
      ValorData.create({
        id_data: newDataShipment.id,
        nombre_mercancia: item.nombre_mercancia,
        valor_usd: item.valor_usd,
        flete_usd: item.flete_usd,
        seguro_usd: item.seguro_usd,
      });
    });

    transbordos.map((item) => {
      TransbordoData.create({
        id_data: newDataShipment.id,
        id_puerto_transbordo: item.id_puerto_transbordo,
        naver_transb: item.naver_transb,
        fecha_transb: item.fecha_transb,
      });
    });

    switch (tipoOperacion) {
      case "fcl":
        DataFCL.create({
          id_data: newDataShipment.id,
          id_puerto_destino: fcl.id_puerto_destino,
          deposito_contenedores: fcl.deposito_contenedores,
          cont_tipo: fcl.cont_tipo,
          sello: fcl.sello,
          lugar_destino: fcl.lugar_destino,
        });
        break;
      case "lcl":
        DataLCL.create({
          id_data: newDataShipment.id,
          id_puerto_transbordo: lcl.id_puerto_transbordo,
          contenedor: lcl.contenedor,
          cant_bultos: lcl.cant_bultos,
          peso: lcl.peso,
          volumen: lcl.volumen,
          lugar_destino: lcl.lugar_destino,
        });
        break;
    }

    res.json({ resultado: true, data: Shipment });
  } catch (error) {
    console.log(error);
    res.status.json({ resultado: false, message: error });
  }
};

module.exports = getShipment;
