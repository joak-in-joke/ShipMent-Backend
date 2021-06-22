import embarques from "../models/embarques";
import dataembarque from "../models/dataembarque";
var Sequelize = require("sequelize");
export async function filterEmbarque(req, res) {
  const { filtro, busqueda } = req.body;
  console.log(filtro, busqueda);
  if (busqueda && filtro) {
    var query;
    switch (filtro) {
      case "id":
        query = {
          where: {
            id: busqueda,
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
            referencia: {
              [Sequelize.Op.substring]: busqueda.toUpperCase(),
            },
          },
        };
        break;

      case "etd":
        query = {
          where: {
            etd: busqueda.toString(),
          },
        };

      case "eta":
        query = {
          where: {
            eta: busqueda.toString(),
          },
        };
        break;
    }

    try {
      const embarque = await embarques.findAll(query);
      res.json(embarque);
    } catch (error) {
      console.log(error);
    }
  } else if (busqueda) {
    console.log("wenawena");

    if (typeof busqueda == "number") {
      query = {
        where: {
          [Sequelize.Op.or]: [{ id: busqueda }, { n_operacion: busqueda }],
        },
      };
    } else if (typeof busqueda == "string") {
      query = {
        where: {
          [Sequelize.Op.or]: [
            { estado: busqueda },
            { referencia: busqueda },
            { medio_transporte: busqueda },
            { tipo_operacion: busqueda },
          ],
        },
      };
    }
    try {
      const embarque = await embarques.findAll(query);
      res.json(embarque);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(await embarques.findAll());
  }
}
