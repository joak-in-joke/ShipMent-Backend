import sequelize from "sequelize";
import lineadetiempo from "../models/lineadetiempo";
import comentarios from "../models/comentarioslineadetiempo";
import embarques from "../models/embarques";
import comentarioslineadetiempo from "../models/comentarioslineadetiempo";

//
export async function createComentary(req, res) {
  const { id, contenido, titulo, fecha, id_usuario } = req.body;
  try {
    const getTimeline = await lineadetiempo.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });
    if (getTimeline) {
      const addComentario = await comentarios.create(
        {
          id_linea_tiempo: getTimeline.id,
          contenido,
          creado: fecha,
          estado: "Activo",
          id_usuario: id_usuario,
          titulo,
          fecha,
        },
        {
          fields: [
            "id_linea_tiempo",
            "contenido",
            "creado",
            "estado",
            "id_usuario",
            "titulo",
            "fecha",
          ],
        }
      );
      return res.json({
        message: "Linea de tiempo creada Satisfactoriamente",

        addComentario,
      });
    } else {
      const newTimeline = await lineadetiempo.create(
        {
          estado: "Activo",
          id_embarque: id,
        },
        {
          fields: ["estado", "id_embarque"],
        },
        {
          attributes: ["id"],
        }
      );
      const addComentario = await comentarios.create(
        {
          id_linea_tiempo: newTimeline.id,
          contenido,
          creado: fecha,
          estado: "Activo",
          id_usuario: id_usuario,
          titulo,
          fecha,
        },
        {
          fields: [
            "id_linea_tiempo",
            "contenido",
            "creado",
            "estado",
            "id_usuario",
            "titulo",
            "fecha",
          ],
        }
      );
      return res
        .json({
          resultado: true,
          newTimeline,
          addComentario,
        })
        .status(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Oops algo salio mal/:",
    });
  }
}

export async function getTimelines(req, res) {
  const { id } = req.params;
  try {
    const timeline = await comentarios.findAll({
      where: {
        id_linea_tiempo: id,
      },
    });
    res.json(timeline);
  } catch (error) {
    console.log(error);
  }
}
export async function getTimelinesbyid(req, res) {
  //obtiene los timeline segun el id del embarque

  const { id } = req.params;
  try {
    const timelinebyid = await lineadetiempo.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id", "id_embarque"],
    });
    if (timelinebyid) {
      const timeline = await comentarios.findAll({
        where: {
          id_linea_tiempo: timelinebyid.id,
        },
        order: [["creado", "ASC"]],
      });
      const embarqueData = await embarques.findOne({
        where: {
          id,
        },
      });
      const payload = {
        timeline,
        estado: embarqueData.estado,
        etd: embarqueData.etd,
        eta: embarqueData.eta,
      };
      res.json({ resultado: true, data: payload }).status(200);
    } else {
      res
        .json({
          result: false,
          error:
            "Este Embarque no tiene linea de tiempo o ya fueron todas realizadas (:",
        })
        .status(400);
    }
  } catch (error) {
    console.log(error).status(500);
  }
}

export async function deleteTimeline(req, res) {
  //se elimina segun el id del timeline, no del embarque
  const { id } = req.params;

  try {
    const deleteRowCount = await comentarios.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Linea de tiempo eliminada correctamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteComentary(req, res) {
  //se elimina el comentario por id
  const { id } = req.body;

  try {
    comentarioslineadetiempo.destroy({
      where: {
        id,
      },
    });
    res
      .json({
        resultado: true,
        message: "Comentario borrado correctamente",
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
}

export async function finishTimeline(req, res) {
  // Cierra el embarque y la linea de tiempo
  const { id } = req.body;
  try {
    const TimelineUpdate = await lineadetiempo.update(
      { estado: "finalizado" },
      { where: { id_embarque: id } }
    );
    const embarqueData = await embarques.update(
      { estado: "finalizado" },
      { where: { id } }
    );
    res
      .json({
        resultado: true,
        TimelineUpdate,
        embarqueData,
      })
      .status(200);
  } catch (error) {
    console.log(error);
    res
      .json({
        resultado: false,
      })
      .status(500);
  }
}

export async function UpdateTimeline(req, res) {
  //recibe por el params el id de la timeline que desea modificar
  const { id } = req.params;
  const { contenido, estado, titulo, fecha } = req.body;

  const TimelineUpdate = await comentarios.update(
    {
      contenido,
      estado,
      titulo,
      fecha,
    },
    {
      where: { id },
    }
  );
  res.json({
    message: "Linea de tiempo actualizada",
    TimelineUpdate,
  });
}
