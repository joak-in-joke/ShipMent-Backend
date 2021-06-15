import sequelize from "sequelize";
import dataembarque from "../models/dataembarque";
import valorData from "../models/valordata";

export async function getMercanciasbyId(req, res) {
  try {
    const { id } = req.params; //id del embarque

    //buscamos el dataembarque asociado al embarque
    const getData = await dataembarque.findOne({
      where: {
        id_embarque: id,
      },
      attributes: ["id"],
    });

    const getMerca = valorData.findAll({
      where: {
        id_data: getData.id,
      },
    });

    res.json({ respuesta: true, message: getMerca });
  } catch (e) {
    res.json({ respuesta: false, message: "ops algo malio sal", error: e });
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
