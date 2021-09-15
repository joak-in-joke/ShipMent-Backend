const { response } = require("express");

var models = require("../../models");
var Embarque = models.Embarque;
var DataEmbarque = models.DataEmbarque;
var TransbordoData = models.TransbordoData;
var Puerto = models.Puerto;
var OperadorLogistico = models.OperadorLogistico;
var AgenciaAduana = models.AgenciaAduana;
var ProveedorCliente = models.ProveedorCliente;
var ValorData = models.ValorData;
var DataLCL = models.DataLCL;
var DataFCL = models.DataFCL;

const createShipment = async (req, res = response) => {
  var {
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
    const newShipment = await Embarque.create(
      {
        n_operacion,
        estado: 1,
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
        transbordo: transbordos ? true : false,
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

    if (mercancias) {
      mercancias.map((item) => {
        ValorData.create(
          {
            id_data: newDataShipment.id,
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
    if (transbordos) {
      transbordos.map((item) => {
        TransbordoData.create(
          {
            id_data: newDataShipment.id,
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
        DataFCL.create(
          {
            id_data: newDataShipment.id,
            id_puerto_destino: id_puerto_destino,
            deposito_contenedores: deposito_contenedores,
            cont_tipo: cont_tipo,
            sello: sello,
            lugar_destino: lugardestino,
          },
          {
            fields: [
              "id_data",
              "id_puerto_destino",
              "deposito_contenedores",
              "cont_tipo",
              "sello",
              "lugar_destino",
            ],
            attributes: ["id"],
          }
        );
        break;
      case "LCL":
        DataLCL.create(
          {
            id_data: newDataShipment.id,
            id_puerto_destino: id_puerto_destino,
            contenedor: contenedor,
            cant_bultos: cant_bultos,
            peso: peso,
            volumen: volumen,
            lugar_destino: lugardestino,
          },
          {
            fields: [
              "id_data",
              "id_puerto_destino",
              "contenedor",
              "cant_bultos",
              "peso",
              "volumen",
              "lugar_destino",
            ],
            attributes: ["id"],
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

module.exports = createShipment;
