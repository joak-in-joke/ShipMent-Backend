import embarques from "../models/embarques";
import dataembarque from "../models/dataembarque";
import timeline from "../models/lineadetiempo";
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
import transbordoData from "../models/transbordoData";

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
        estado: "Origen",
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

      //tenemos que crear la linea de tiempo con titulo Origen contenido: a la espera de salir
      const createTimeline = await timeline.create(
        {
          id_embarque: newEmbarque.id,
          estado: "Activo",
        },
        {
          fields: ["id_embarque", "estado"],
        }
      );

      if (createTimeline) {
        //consigo el id del timeline
        const getTimeline = await timelines.findOne({
          where: {
            id_embarque: newEmbarque.id,
          },
          attributes: ["id"],
        });
        const createComentario = await comentarios.create(
          {
            id_linea_tiempo: getTimeline.id,
            titulo: "Origen",
            contenido: "A la espera de salir",
            estado: "Activo",
            creado: sequelize.literal("CURRENT_TIMESTAMP"),
          },
          {
            fields: [
              "id_linea_tiempo",
              "titulo",
              "contenido",
              "estado",
              "creado",
            ],
          }
        );
      }
      //creamos el comentario

      if (newDataEmbarque && newValorData && createTimeline) {
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

export async function getEmbarque(req, res) {
  const { id } = req.params;
  try {
    const embarque = await embarques.findOne({
      where: {
        id,
      },
    });
    if (embarque) {
      let data_transporte;
      const datoEmbarque = await dataembarque.findOne({
        where: {
          id_embarque: id,
        },
      });

      const valorEmbarque = await valordata.findOne({
        where: {
          id_data: id,
        },
      });

      const transbordoEmbarque = await transbordoData.findOne({
        where: {
          id_data: id,
        },
      });
      if (embarque.medio_transporte === "LCL") {
        data_transporte = await datalcl.findOne({
          where: {
            id_data: id,
          },
        });
      } else if (embarque.medio_transporte === "FCL") {
        data_transporte = await datafcl.findOne({
          where: {
            id_data: id,
          },
        });
      }

      const payload = {
        id: embarque.id,
        n_operacion: embarque.n_operacion,
        estado: embarque.estado,
        referencia: embarque.referencia,
        etd: embarque.etd,
        eta: embarque.eta,
        medio_transporte: embarque.medio_transporte,

        tipo_operacion: datoEmbarque.tipo_operacion,
        intercom: datoEmbarque.intercom,
        exportador: datoEmbarque.inteexportadorrcom,
        importador: datoEmbarque.importador,
        embarcador: datoEmbarque.embarcador,
        agencia_aduana: datoEmbarque.agencia_aduana,
        tipo_documento: datoEmbarque.tipo_documento,
        documento: datoEmbarque.documento,
        motonave: datoEmbarque.motonave,
        viaje: datoEmbarque.viaje,
        naviera: datoEmbarque.naviera,
        transbordo: datoEmbarque.transbordo,
        reserva: datoEmbarque.reserva,
        fecha_inicio: datoEmbarque.fecha_inicio,
        fecha_fin: datoEmbarque.fecha_fin,

        puerto_transb: transbordoEmbarque.puerto_transb,
        naver_transb: transbordoEmbarque.naver_transb,
        fecha_transb: transbordoEmbarque.fecha,
        data_transporte: data_transporte,
        valorData: valorEmbarque,
      };
      res.json({ resultado: true, data: payload }).status(200);
    } else {
      res.json({ resultado: false, message: "ID inexistente" }).status(400);
    }
  } catch (error) {
    console.log({ resultado: false, error: error }).status(400);
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

    const getEmbarque = await embarques.findOne(
      {
        where: {
          id,
        },
      },
      {
        attributes: ["id", "estado"],
      }
    );

    //si existe el id cambio el estado y completo la actividad anterior
    if (getEmbarque) {
      const EmbarquesUpdate = await embarques.update(
        {
          n_operacion,
          estado,
          referencia,
          etd,
          eta,
          medio_transporte,
        },
        {
          where: { id },
        }
      );
      //dependiendo del estado al que cambio es el comentario que creo

      //si el estado actual es origen y pasa a Abordo
      if (estado == "Abordo") {
        //obtengo el id de la linea de tiempo para crear el comentario
        const getTimelineId = await timeline.findOne(
          {
            where: {
              id_embarque: id,
            },
          },
          {
            attributes: ["id"],
          }
        );

        //cambio el estado de la linea de tiempo anterior a finalizado
        const setTimelineState = await comentarios.update(
          {
            estado: "Finalizado",
          },
          {
            where: {
              titulo: "Origen",
            },
          }
        );
        //creo un comentario  linea de tiempo para Abordo
        const createComTimeline = await comentarios.create(
          {
            id_linea_tiempo: getTimelineId.id,
            titulo: "Abordo",
            contenido: "Viajando a destino",
            estado: "Activo",
            creado: sequelize.literal("CURRENT_TIMESTAMP"),
          },
          {
            fields: [
              "id_linea_tiempo",
              "titulo",
              "contenido",
              "estado",
              "creado",
            ],
          }
        );
        res.json({ Respuesta: "Estado cambiado a Abordo" });
      }

      //si el estado actual es Abordo y pasa a Llegado
      else if (estado == "Llegado") {
        //obtengo el id de la linea de tiempo para crear el comentario
        const getTimelineId = await timeline.findOne(
          {
            where: {
              id_embarque: id,
            },
          },
          {
            attributes: ["id"],
          }
        );

        //cambio el estado de la linea de tiempo anterior a finalizado
        const setTimelineState = await comentarios.update(
          {
            estado: "Finalizado",
          },
          {
            where: {
              estado: "Abordo",
            },
          }
        );
        //creo un comentario  linea de tiempo para Abordo
        const createComTimeline = await comentarios.create(
          {
            id_linea_tiempo: getTimelineId.id,
            titulo: "Llegado",
            contenido: "Llego a destino",
            estado: "Activo",
            creado: sequelize.literal("CURRENT_TIMESTAMP"),
          },
          {
            fields: [
              "id_linea_tiempo",
              "titulo",
              "contenido",
              "estado",
              "creado",
            ],
          }
        );
        res.json({ Respuesta: "Estado cambiado a Llegado" });
      }

      //si el estado actual es Llegado y pasa a Origen
      else if (estado == "Finalizado") {
        //obtengo el id de la linea de tiempo para crear el comentario
        const getTimelineId = await timeline.findOne(
          {
            where: {
              id_embarque: id,
            },
          },
          {
            attributes: ["id"],
          }
        );

        //cambio el estado de la linea de tiempo anterior a finalizado
        const setTimelineState = await comentarios.update(
          {
            estado: "Finalizado",
          },
          {
            where: {
              estado: "Llegado",
            },
          }
        );
        //creo un comentario  linea de tiempo para Abordo
        const createComTimeline = await comentarios.create(
          {
            id_linea_tiempo: getTimelineId.id,
            titulo: "Finalizado",
            contenido: "Emabarque finalizado!",
            estado: "Finalizado",
            creado: sequelize.literal("CURRENT_TIMESTAMP"),
          },
          {
            fields: [
              "id_linea_tiempo",
              "titulo",
              "contenido",
              "estado",
              "creado",
            ],
          }
        );
        res.json({ Respuesta: "Embarque Finalizado" });
      }

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
    } else {
      res.json({
        respuesta: false,
        message: "no se pudo encontrar dicho embarque",
      });
    }

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

// export async function setEstado(req, res) {
//   const { id } = req.params;
//   const { estado } = req.body;
//   try {
//     //primero busco el embarque con el id
//     const getEmbarque = await embarques.findOne(
//       {
//         where: {
//           id,
//         },
//       },
//       {
//         attributes: ["id", "estado"],
//       }
//     );

//     //si existe el id cambio el estado y completo la actividad anterior
//     if (getEmbarque) {
//       //cambio el estado del embarque
//       const setState = await embarques.update(
//         {
//           estado,
//         },
//         {
//           where: { id },
//         }
//       );

//       //dependiendo del estado al que cambio es el comentario que creo

//       //si el estado actual es origen y pasa a Abordo
//       if (getEmbarque.estado == "Origen " && estado == "Abordo") {
//         //obtengo el id de la linea de tiempo para crear el comentario
//         const getTimelineId = await timeline.findOne(
//           {
//             where: {
//               id_embarque: id,
//             },
//           },
//           {
//             attributes: ["id"],
//           }
//         );

//         //cambio el estado de la linea de tiempo anterior a finalizado
//         const setTimelineState = await comtimeline.update(
//           {
//             estado: "Finalizado",
//           },
//           {
//             where: {
//               estado: "Origen",
//             },
//           }
//         );
//         //creo un comentario  linea de tiempo para Abordo
//         const createComTimeline = await comtimeline.create(
//           {
//             id_linea_tiempo: getTimelineId.id,
//             titulo: "Abordo",
//             Contenido: "Viajando a destino",
//             estado: "Activo",
//             creado: sequelize.literal("CURRENT_TIMESTAMP"),
//           },
//           {
//             fields: [
//               "id_linea_tiempo",
//               "titulo",
//               "contenido",
//               "estado",
//               "creado",
//             ],
//           }
//         );
//         res.json({ Respuesta: "Estado cambiado a Abordo" });
//       }

//       //si el estado actual es Abordo y pasa a Llegado
//       else if (getEmbarque.estado == "Abordo " && estado == "Llegado") {
//         //obtengo el id de la linea de tiempo para crear el comentario
//         const getTimelineId = await timeline.findOne(
//           {
//             where: {
//               id_embarque: id,
//             },
//           },
//           {
//             attributes: ["id"],
//           }
//         );

//         //cambio el estado de la linea de tiempo anterior a finalizado
//         const setTimelineState = await comtimeline.update(
//           {
//             estado: "Finalizado",
//           },
//           {
//             where: {
//               estado: "Abordo",
//             },
//           }
//         );
//         //creo un comentario  linea de tiempo para Abordo
//         const createComTimeline = await comtimeline.create(
//           {
//             id_linea_tiempo: getTimelineId.id,
//             titulo: "Llegado",
//             Contenido: "Llego a destino",
//             estado: "Activo",
//             creado: sequelize.literal("CURRENT_TIMESTAMP"),
//           },
//           {
//             fields: [
//               "id_linea_tiempo",
//               "titulo",
//               "contenido",
//               "estado",
//               "creado",
//             ],
//           }
//         );
//         res.json({ Respuesta: "Estado cambiado a Llegado" });
//       }

//       //si el estado actual es Llegado y pasa a Origen
//       else if (getEmbarque.estado == "Llegado " && estado == "Finalizado") {
//         //obtengo el id de la linea de tiempo para crear el comentario
//         const getTimelineId = await timeline.findOne(
//           {
//             where: {
//               id_embarque: id,
//             },
//           },
//           {
//             attributes: ["id"],
//           }
//         );

//         //cambio el estado de la linea de tiempo anterior a finalizado
//         const setTimelineState = await comtimeline.update(
//           {
//             estado: "Finalizado",
//           },
//           {
//             where: {
//               estado: "Llegado",
//             },
//           }
//         );
//         //creo un comentario  linea de tiempo para Abordo
//         const createComTimeline = await comtimeline.create(
//           {
//             id_linea_tiempo: getTimelineId.id,
//             titulo: "Finalizado",
//             Contenido: "Emabarque finalizado!",
//             estado: "Finalizado",
//             creado: sequelize.literal("CURRENT_TIMESTAMP"),
//           },
//           {
//             fields: [
//               "id_linea_tiempo",
//               "titulo",
//               "contenido",
//               "estado",
//               "creado",
//             ],
//           }
//         );
//         res.json({ Respuesta: "Embarque Finalizado" });
//       }

//       //se deberian crear casos para retroceder? si elimino una tarjeta paso al estado anterior?
//     } else {
//       res.json({
//         respuesta: false,
//         message: "no se ha encontrado el embarque",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function getEstado(req, res) {
  const allActivos = await embarques.findAll({
    where: {
      estado: "Origen",
    },
  });
  const allAbordos = await embarques.findAll({
    where: {
      estado: "Abordo",
    },
  });
  const allLlegadas = await embarques.findAll({
    where: {
      estado: "Llegado",
    },
  });
  const allFinalizados = await embarques.findAll({
    where: {
      estado: "Finalizado",
    },
  });
  const Estado = {
    Activos: allActivos.length,
    Abordos: allAbordos.length,
    Llegadas: allLlegadas.length,
    Finalizados: allFinalizados.length,
  };
  res.json({ resultado: true, data: Estado });
}

export async function getActivos(req, res) {
  const allActivos = await embarques.findAll({
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
      estado: "Origen",
    },
  });
  res.json(allActivos.length);
}

export async function getFinalizados(req, res) {
  const allFinalizados = await embarques.findAll({
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
  res.json(allFinalizados.length);
}
