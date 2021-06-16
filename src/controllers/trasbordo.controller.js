import dataembarque from "../models/dataembarque";
import trasbordo from "../models/trasbordos";

export async function getTrasbordos(req, res) {
  try {
    const { id } = req.params; //id del embarque

    //buscamos el dataembarque asociado al embarque

    const getdata = await dataembarque.findOne({
      where: {
        id_embarque: id,
      },
    });
    const getTrasbordos = await trasbordo.findAll({
      where: {
        id_data: getdata.id,
      },
    });

    res.json({ respuesta: true, getTrasbordos });
  } catch (e) {
    res.json({ respuesta: false, message: "ops algo malio sal", error: e });
  }
}

export async function deleteTrasbordo(req, res) {
  const { id } = req.body;
  try {
    const deleteTrasbordo = await trasbordo.destroy({
      where: {
        id,
      },
    });
    res.json({ respuesta: true, message: "Trasbordo eliminado correctamente" });
  } catch (e) {
    res.json({ respuesta: false, error });
  }
}
