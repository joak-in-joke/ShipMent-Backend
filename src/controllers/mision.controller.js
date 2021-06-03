import sequelize from "sequelize";
import misionero from "../models/mision";

export async function createMissions(req, res) {
  const { contenido } = req.body;
  try {
    let newMision = await misionero.create(
      {
        contenido,
        creado: sequelize.literal("CURRENT_TIMESTAMP"),
        estado: "Activo"
      },
      {
        fields: ["contenido", "creado", "estado"],
      }
    );
    if (newMision) {
      return res.json({
        message: "Mision create",
        newMision,
      });
    }


        else{
            console.log(error);
            res.status(500).json({
                message: 'Oops algo salio mal/:'
            })
        }
    }       
        catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Oops algo salio mal/:'
        });
}
}

export async function getAllMissions(req, res){
    const allMisiones = await misionero.findAll({
        attributes: ['id','contenido','creado','estado'],
        order: [
            ['id', 'DESC']
        ],
        attributes: ['id','contenido']

  }); 
 res.json(allMisiones);
}

export async function getMision(req, res) {
  const { id } = req.params;
  try {
    const mision = await misionero.findOne({
      where: {
        id,
      },
      attributes: ['id','contenido']
    });
    res.json(mision);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteMision(req, res) {
  const { id } = req.params;

  try {
    const deleteRowCount = await misionero.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Mision eliminada correctamente",
      count: deleteRowCount,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function updateMision(req, res) {
  const { id } = req.params;
  const { contenido} = req.body;
  console.log(id, contenido);

  const misionUpdate = await misionero.update(
    {
      contenido,
    },
    {
      where: { id },
    }
  );
  res.json({
    message: "Mision update Succesfully! (: ",
    misionUpdate,
  });
}

