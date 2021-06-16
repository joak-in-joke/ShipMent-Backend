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
import transbordo from "../models/trasbordos";
import documentos from "../models/documentos";
import documento from "../models/documento";

export async function createEmbarque(req, res) {
  try {
    const {
      //embarque
      tipo_operacion,
      n_operacion,
      medio_transporte,
      referencia,
      etd,
      eta,

      //dataEmbarque
      incoterm,
      exportador,
      importador,
      embarcador, //operador logistico
      agencia_aduana,
      motonave,
      puertoembarque,
      puertodestino,
      lugardestino,
      naviera,
      viaje,
      valor_cif,

      tipo_documento,
      documento,
      reserva,

      //arreglo de trasbordos
      trasbordos,
      //arreglo de mercancias
      mercancias,

      //datos lcl
      contenedor,
      cant_bultos,
      peso,
      volumen,
      lugar_destino,

      //datos fcl
      deposito_contenedores,
      cont_tipo,
      sello,
    } = req.body;

    const newEmbarque = await embarques.create(
      {
        tipo_operacion,
        n_operacion,
        estado: "Origen",
        referencia,
        etd,
        eta,
        medio_transporte,
      },
      {
        fields: [
          "tipo_operacion",
          "n_operacion",
          "estado",
          "referencia",
          "etd",
          "eta",
          "medio_transporte",
        ],
        attributes: ["id"],
      }
    );
    if (newEmbarque) {
      const newDataEmbarque = await dataembarque.create(
        {
          id_embarque: newEmbarque.id,
          intercom: incoterm,
          exportador,
          importador,
          embarcador,
          agencia_aduana,
          motonave,
          puertoembarque,
          puertodestino,
          lugardestino,
          naviera,
          viaje,
          reserva,
          tipo_documento,
          valor_cif,
          documento,

          fecha_inicio: sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          fields: [
            "id_embarque",
            "intercom",
            "exportador",
            "importador",
            "embarcador",
            "agencia_aduana",
            "motonave",
            "puertoembarque",
            "puertodestino",
            "lugardestino",
            "naviera",
            "viaje",
            "reserva",
            "tipo_documento",
            "documento",
            "valor_cif",
            "fecha_inicio",
          ],
          attributes: ["id"],
        }
      );

      if (mercancias) {
        //itera segun cuantos datos se importen de mercancias
        mercancias.map((mercancia) => {
          const newValorData = valordata.create(
            {
              id_data: newDataEmbarque.id,
              nombre_mercancia: mercancia.nombre_mercancia,
              valor_usd: mercancia.valor_usd,
              flete_usd: mercancia.flete_usd,
              seguro_usd: mercancia.seguro_usd,
            },
            {
              fields: [
                "id_data",
                "nombre_mercancia",
                "valor_usd",
                "flete_usd",
                "seguro_usd",
              ],
            }
          );
        });
      }

      if (trasbordos) {
        //itera segun cuantos trasbordos se maneden
        trasbordos.map((trasbordo) => {
          const newTrasbordo = transbordo.create(
            {
              id_data: newDataEmbarque.id,
              puerto_transb: trasbordo.puerto_transb,
              nave: trasbordo.nave,
              fecha: trasbordo.fecha,
            },
            {
              fields: [
                "id_data",
                "id_embarque",
                "puerto_transb",
                "nave",
                "fecha",
              ],
            }
          );
        });
      }
      //crear el lcl y el fcl segun el medio de transporte

      if (medio_transporte == "LCL") {
        //creo el lcl
        const createLCL = await datalcl.create(
          {
            id_data: newDataEmbarque.id,
            contenedor,
            cant_bultos,
            peso,
            volumen,
            lugar_destino,
          },
          {
            fields: [
              "id_data",
              "contenedor",
              "cant_bultos",
              "peso",
              "volumen",
              "lugar_destino",
            ],
          },
          {
            attributes: ["id"],
          }
        );
      } else if (medio_transporte == "FCL") {
        //creo el fcl
        const createFCL = await datafcl.create(
          {
            id_data: newDataEmbarque.id,
            deposito_contenedores,
            cont_tipo,
            sello,
          },
          {
            fields: ["id_data", "deposito_contenedores", "cont_tipo", "sello"],
          }
        );
      }

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
        if (getTimeline) {
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
        } else {
          res.json({
            respuesta: false,
            message: "No se pudo obtener la linea de tiempo",
          });
        }
      } else {
        res.json({
          respuesta: false,
          message: "No se pudo crear la linea de tiempo",
        });
      }

      const payload = {
        tipo_operacion: newEmbarque.tipo_operacion,
        n_operacion: newEmbarque.n_operacion,
        medio_transporte: newEmbarque.medio_transporte,
        referencia: newEmbarque.referencia,
        etd: newEmbarque.etd,
        eta: newEmbarque.eta,

        //dataEmbarque
        incoterm: newDataEmbarque.intercom,
        exportador: newDataEmbarque.exportador,
        importador: newDataEmbarque.importador,
        embarcador: newDataEmbarque.embarcador, //operador logistico
        agencia_aduana: newDataEmbarque.agencia_aduana,
        motonave: newDataEmbarque.motonave,
        puertoembarque: newDataEmbarque.puertoembarque,
        puertodestino: newDataEmbarque.puertodestino,
        lugardestino: newDataEmbarque.lugardestino,
        naviera: newDataEmbarque.naviera,
        viaje: newDataEmbarque.viaje,
        valor_cif: newDataEmbarque.valor_cif,

        tipo_documento: newDataEmbarque.tipo_documento,
        documento: newDataEmbarque.documento,
        reserva: newDataEmbarque.reserva,

        // //arreglo de trasbordos
        // trasbordos,
        // //arreglo de mercancias
        // mercancias,
      };

      res.json({ respuesta: true, payload });
    }

    // //creamos el comentario
    // if (newDataEmbarque && createTimeline) {
    //   return res.json({
    //     message: "Embarque creado Satisfactoriamente",
    //   });
    // } else {
    //   console.log(error);
    //   res.status(500).json({
    //     message: "Oops algo salio mal/:",
    //   });
    // }
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

      const valorEmbarque = await valordata.findAll({
        where: {
          id_data: datoEmbarque.id,
        },
      });

      const transbordoEmbarque = await transbordo.findAll({
        where: {
          id_data: datoEmbarque.id,
        },
      });
      if (embarque.medio_transporte === "LCL") {
        data_transporte = await datalcl.findOne({
          where: {
            id_data: datoEmbarque.id,
          },
        });
      } else if (embarque.medio_transporte === "FCL") {
        data_transporte = await datafcl.findOne({
          where: {
            id_data: datoEmbarque.id,
          },
        });
      }

      const payload = {
        id: embarque.id,
        tipo_operacion: embarque.tipo_operacion,
        n_operacion: embarque.n_operacion,
        estado: embarque.estado,
        referencia: embarque.referencia,
        etd: embarque.etd,
        eta: embarque.eta,
        medio_transporte: embarque.medio_transporte,

        intercom: datoEmbarque.intercom,
        exportador: datoEmbarque.exportador,
        importador: datoEmbarque.importador,
        embarcador: datoEmbarque.embarcador,
        agencia_aduana: datoEmbarque.agencia_aduana,
        tipo_documento: datoEmbarque.tipo_documento,
        documento: datoEmbarque.documento,
        puertoembarque: datoEmbarque.puertoembarque,
        puertodestino: datoEmbarque.puertodestino,
        lugardestino: datoEmbarque.lugardestino,
        motonave: datoEmbarque.motonave,
        viaje: datoEmbarque.viaje,
        naviera: datoEmbarque.naviera,
        transbordo: datoEmbarque.transbordo,
        reserva: datoEmbarque.reserva,
        fecha_inicio: datoEmbarque.fecha_inicio,
        fecha_fin: datoEmbarque.fecha_fin,
        valor_cif: datoEmbarque.valor_cif,

        // puerto_transb: transbordoEmbarque.puerto_transb,
        // naver_transb: transbordoEmbarque.naver_transb,
        // fecha_transb: transbordoEmbarque.fecha,
        data_transporte: data_transporte,
        valorData: valorEmbarque,
        transbordoEmbarque: transbordoEmbarque,
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
  const { id } = req.body;
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
      incoterm,
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
          tipo_operacion,
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
        //cambio el estado de el embarque
        const setEmbarqueState = await embarque.update(
          {
            estado: "Finalizado",
          },
          {
            where: {
              estado: "Llegado",
            },
          }
        );
        //del dataEmbarque le agrego el tiempo_fin
        const setTime = await dataembarque.update({
          fecha_fin: sequelize.literal("CURRENT_TIMESTAMP"),
        });
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
          intercom: incoterm,
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
          valor_cif,
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
      "medio_transporte",
    ],
    order: [["id", "DESC"]],
    where: {
      estado: "Finalizado",
    },
  });
  res.json(allFinalizados.length);
}
