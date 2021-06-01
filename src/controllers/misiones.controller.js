import sequelize from "sequelize";
import misionero from "../models/misiones";

export async function createMisiones(req, res) {
  const { misiones } = req.body;
  try {
    let newMision = await misionero.create(
      {
        misiones,
        creado: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      {
        fields: ["misiones", "creado"],
      }
    );
    if (newMision) {
      return res.json({
        message: "Mision creada Satisfactoriamente",
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

export async function getAllMisiones(req, res){
    const allMisiones = await misionero.findAll({
        attributes: ['id','misiones'],
        order: [
            ['id', 'DESC']
        ]

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
  const { misiones} = req.body;
  console.log(id, misiones);

  const misionUpdate = await misionero.update(
    {
      misiones,
    },
    {
      where: { id },
    }
  );
  res.json({
    message: "Usuario actualizado",
    misionUpdate,
  });
}
