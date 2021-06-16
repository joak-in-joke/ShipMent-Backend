import sequelize, { json } from "sequelize";
import dataembarque from "../models/dataembarque";
import valorData from "../models/valordata";
import embarque from "../models/embarques";

export async function getMercanciasbyId(req, res) {
  try {
    const { id } = req.params; //id del embarque

    //buscamos el dataembarque asociado al embarque

    const getdata = await dataembarque.findOne({
      where: {
        id_embarque: id,
      },
    });
    const getMerca = await valorData.findAll({
      where: {
        id_data: getdata.id,
      },
    });

    res.json({ respuesta: true, getMerca });
  } catch (e) {
    res.json({ respuesta: false, message: "ops algo malio sal", error: e });
  }
}

export async function deleteMercancia(req, res) {
  const { id } = req.body;
  try {
    const deleteMercancia = await valorData.destroy({
      where: {
        id,
      },
    });
    res.json({ respuesta: true, message: "Mercancia eliminada correctamente" });
  } catch (e) {
    res.json({ respuesta: false, error });
  }
}

export async function createfcl(req, res) {
  const { id_data, nombre_mercancia, valor_usd, flete_usd, seguro_usd } =
    req.body;
  try {
    const newValorData = await valorData.create(
      {
        id_data,
        nombre_mercancia,
        valor_usd,
        flete_usd,
        seguro_usd,
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      resultado: false,
    });
  }
}
