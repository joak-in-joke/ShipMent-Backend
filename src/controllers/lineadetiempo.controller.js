import sequelize from "sequelize";
import lineadetiempo from "../models/lineadetiempo";
import comentarios from "../models/comentarioslineadetiempo";

//
export async function createTimeline(req, res) {
  const { id, contenido, titulo, fecha } = req.body;
  try {
    const getTimeline = await lineadetiempo.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });
    console.log(getTimeline);
    if (getTimeline) {
      const addComentario = await comentarios.create(
        {
          id_linea_tiempo: getTimeline.id,
          contenido,
          creado: sequelize.literal("CURRENT_TIMESTAMP"),
          estado: "Activo",
          titulo,
          fecha,
        },
        {
          fields: [
            "id_linea_tiempo",
            "contenido",
            "creado",
            "estado",
            "titulo",
            "fecha",
          ],
        }
      );
      return res.json({
        message: "Mision creada Satisfactoriamente",
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
          creado: sequelize.literal("CURRENT_TIMESTAMP"),
          estado: "Activo",
          titulo,
          fecha,
        },
        {
          fields: [
            "id_linea_tiempo",
            "contenido",
            "creado",
            "estado",
            "titulo",
            "fecha",
          ],
        }
      );
      return res.json({
        message: "Linea de tiempo creada Satisfactoriamente",
        newTimeline,
        addComentario,
      });
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
      });
      res.json(timeline);
    } else {
      res.json(
        "Este Embarque no tiene linea de tiempo o ya fueron todas realizadas (:"
      );
    }
  } catch (error) {
    console.log(error);
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
