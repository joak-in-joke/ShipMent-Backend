import embarques from "../models/embarques";
import dataembarque from "../models/dataembarque";
import sequelize from "sequelize";
import valordata from "../models/valordata";
import timelines from "../models/lineadetiempo";
import comentarios from "../models/comentarioslineadetiempo";
import finanza from "../models/finanzas";
import itemfinanza from "../models/item_finanzas";
import datalcl from "../models/datalcl";
import datafcl from "../models/datafcl";
import transbordo from "../models/transbordoData";
import documentos from "../models/documentos";
import documento from "../models/documento";

export async function createEmbarque(req, res) {
  try {
    const {
      n_operacion,
      referencia,
      etd,
      eta,
      rut,
      medio_transporte,
      tipo_operacion,
      intercom,
      exportador,
      importador,
      embarcador,
      agencia_aduana,
      tipo_documento,
      documento,
      motonave,
      viaje,
      naviera,
      transbordo,
      reserva,
      fecha_fin,
      nombre_mercancia,
      valor_usd,
      flete_usd,
      seguro_usd,
      valor_cif,
    } = req.body;
    const newEmbarque = await embarques.create(
      {
        n_operacion,
        estado: "activo",
        referencia,
        etd,
        eta,
        rut,
        medio_transporte,
      },
      {
        fields: [
          "n_operacion",
          "estado",
          "referencia",
          "etd",
          "eta",
          "rut",
          "medio_transporte",
        ],
        attributes: ["id"],
      }
    );
    if (newEmbarque) {
      const newDataEmbarque = await dataembarque.create(
        {
          id_embarque: newEmbarque.id,
          tipo_operacion,
          intercom,
          exportador,
          importador,
          embarcador,
          agencia_aduana,
          tipo_documento,
          documento,
          motonave,
          viaje,
          naviera,
          transbordo,
          reserva,
          fecha_inicio: sequelize.literal("CURRENT_TIMESTAMP"),
          fecha_fin,
        },
        {
          fields: [
            "id_embarque",
            "tipo_operacion",
            "intercom",
            "exportador",
            "importador",
            "embarcador",
            "agencia_aduana",
            "tipo_documento",
            "documento",
            "motonave",
            "viaje",
            "naviera",
            "transbordo",
            "reserva",
            "fecha_inicio",
            "fecha_fin",
          ],
          attributes: ["id"],
        }
      );
      const newValorData = await valordata.create(
        {
          id_data: newDataEmbarque.id,
          nombre_mercancia,
          valor_usd,
          flete_usd,
          seguro_usd,
          valor_cif,
        },
        {
          fields: [
            "id_data",
            "nombre_mercancia",
            "valor_usd",
            "flete_usd",
            "seguro_usd",
            "valor_cif",
          ],
        }
      );
      if (newDataEmbarque && newValorData) {
        return res.json({
          message: "Embarque creado Satisfactoriamente",
          newEmbarque,
          newValorData,
          newDataEmbarque,
        });
      }
    } else {
      console.log(error);
      res.status(500).json({
        message: "Oops algo salio mal/:",
        newEmbarque,
        newValorData,
        newDataEmbarque,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getEmbarques(req, res) {
  const { id } = req.params;
  try {
    const embarque = await embarques.findOne({
      where: {
        id,
      },
    });
    res.json(embarque);
  } catch (error) {
    console.log(error);
  }
}

export async function getallEmbarques(req, res) {
  try {
    const embarque = await embarques.findAll({});
    res.json(embarque);
  } catch (error) {
    console.log(error);
  }
}
export async function deleteEmbarque(req, res) {
  const { id } = req.params;
  //al eliminar un embarque elimino los comentarios asociados
  try {
    //eliminar los comentarios y archivos de un embarque

    //necesito el data embarque id para poder eliminar el valordata
    const getvalorDataId = await dataembarque.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });
    if (getvalorDataId) {
      const deleteValorData = await valordata.destroy({
        where: {
          id_data: getvalorDataId.id,
        },
      });
    }
    const getTimelines = await timelines.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });
    if (getTimelines) {
      const deleteComentaries = await comentarios.destroy({
        where: {
          id_linea_tiempo: getTimelines.id,
        },
      });
      const deleteTimelines = await timelines.destroy({
        where: {
          id_embarque: id,
        },
      });
    }

    const getdataembarque = await dataembarque.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });
    if (getdataembarque) {
      //borrar datalcl
      const deletelcl = await datalcl.destroy({
        where: { id_data: getdataembarque.id },
      });
      //borrarfcl
      const deletefcl = await datafcl.destroy({
        where: { id_data: getdataembarque.id },
      });
      //borrartransbordos
      const deletetransbordos = await transbordo.destroy({
        where: { id_data: getdataembarque.id },
      });
      const getdocuments = await documentos.findOne({
        where: { id_embarque: id },
        attributes: ["id"],
      });
      if (getdocuments) {
        const deleteDocumento = await documento.destroy({
          where: {
            id_documentos: getdocuments.id,
          },
        });
      }
      const deleteDocumentos = await documentos.destroy({
        where: {
          id_embarque: id,
        },
      });
    }

    const deleteDataEmbarque = await dataembarque.destroy({
      where: {
        id_embarque: id,
      },
    });
    //borrar item_finanza y finanza
    const getfinanza = await finanza.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });
    if (getfinanza) {
      const deleteItemFinanza = await itemfinanza.destroy({
        where: {
          id_finanza: getfinanza.id,
        },
      });
    }
    const deletefinanza = await finanza.destroy({
      where: {
        id_embarque: id,
      },
    });

    const deleteEmbarques = await embarques.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Embarque eliminadado correctamente",
      deleteDataEmbarque,
      deleteEmbarques,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateEmbarques(req, res) {
  try {
    const { id } = req.params;
    const {
      n_operacion,
      referencia,
      estado,
      etd,
      eta,
      rut,
      medio_transporte,
      tipo_operacion,
      intercom,
      exportador,
      importador,
      embarcador,
      agencia_aduana,
      tipo_documento,
      documento,
      motonave,
      viaje,
      naviera,
      transbordo,
      reserva,
      fecha_fin,
      nombre_mercancia,
      valor_usd,
      flete_usd,
      seguro_usd,
      valor_cif,
    } = req.body;
    console.log(
      id,
      n_operacion,
      estado,
      referencia,
      etd,
      eta,
      rut,
      medio_transporte,
      tipo_operacion,
      intercom,
      exportador,
      importador,
      embarcador,
      agencia_aduana,
      tipo_documento,
      documento,
      motonave,
      viaje,
      naviera,
      transbordo,
      reserva,
      fecha_fin,
      nombre_mercancia,
      valor_usd,
      flete_usd,
      seguro_usd,
      valor_cif
    );

    const EmbarquesUpdate = await embarques.update(
      {
        n_operacion,
        estado,
        referencia,
        etd,
        eta,
        mediotransporte,
      },
      {
        where: { id },
      }
    );

    const dataEmbarqueUpdate = await dataembarque.update(
      {
        tipo_operacion,
        intercom,
        exportador,
        importador,
        embarcador,
        agencia_aduana,
        tipo_documento,
        documento,
        motonave,
        viaje,
        naviera,
        transbordo,
        reserva,
        fecha_fin,
      },
      {
        where: { id_embarque: id },
      }
    );
    const valorDataUpdate = await valordata.update(
      {
        nombre_mercancia,
        valor_usd,
        flete_usd,
        seguro_usd,
        valor_cif,
      },
      {
        where: { id_data: id },
      }
    );
    res.json({
      message: "Embarque actualizado correctamente",
      EmbarquesUpdate,
      dataEmbarqueUpdate,
      valorDataUpdate,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getActivos(req, res) {
  const allMisiones = await embarques.findAll({
    attributes: [
      "id",
      "n_operacion",
      "estado",
      "referencia",
      "etd",
      "eta",
      "rut",
      "medio_transporte",
    ],
    order: [["id", "DESC"]],
    where: {
      estado: "Activo",
    },
  });
  res.json({ allMisiones });
}

export async function getFinalizados(req, res) {
  const allMisiones = await embarques.findAll({
    attributes: [
      "id",
      "n_operacion",
      "estado",
      "referencia",
      "etd",
      "eta",
      "rut",
      "medio_transporte",
    ],
    order: [["id", "DESC"]],
    where: {
      estado: "Finalizado",
    },
  });
  res.json({ allMisiones });
}
