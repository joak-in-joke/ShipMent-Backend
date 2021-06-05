import embarques from "../models/embarques";
import dataembarque from "../models/dataembarque";
import valordata from "../models/valordata";

export async function getDataEmbarque(req, res) {
  const { id } = req.params;
  try {
    const getembarque = await embarques.findOne({
      where: {
        id,
      },
    });

    const data = await dataembarque.findOne({
      where: {
        id_embarque: id,
      },
    });
    const getValorData = await valordata.findOne({
      where: {
        id_data: id,
      },
    });
    return res.json({
      getembarque,
      data,
      getValorData,
    });
  } catch (error) {
    console.log(error);
    res.status(212).json({
      message: "Oops algo salio mal/:",
    });
  }
}
