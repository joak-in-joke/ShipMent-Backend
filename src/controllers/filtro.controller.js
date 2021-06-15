import embarques from "../models/embarques";
import dataembarque from "../models/dataembarque";

export async function filterEmbarque(req, res) {
  const { filtro, busqueda } = req.body;
  var query;
  switch (filtro) {
    case "id":
      query = {
        where: {
          id_embarque: busqueda,
        },
      };
      break;

    case "status":
      query = {
        where: {
          estado: busqueda,
        },
      };
      break;

    case "referencia":
      query = {
        where: {
          referencia: busqueda,
        },
      };
      break;

    case "etd":
      query = {
        where: {
          etd: busqueda,
        },
      };

    case "eta":
      query = {
        where: {
          eta: busqueda,
        },
      };
      break;
  }

  try {
    const embarque = await embarques.findOne(query);
    res.json(embarque);
  } catch (error) {
    console.log(error);
  }
}
