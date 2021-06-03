import sequelize from "sequelize";
import datauser from "../models/datausuario";
import user from "../models/usuario";

export async function createuser(req, res) {
  const { nombre,apellido,rut,dv,mail,estado,cargo,asesor,telefono,direccion,comuna,nacionalidad,contraseña,contraseña2,tipo } = req.body;
  try {
    
    let newdataUser = await datauser.create(
      {
        nombre,
        apellido,
        rut,
        dv,
        mail,
        estado,
        cargo,
        asesor,

        telefono,
        direccion,
        comuna,
        nacionalidad,
        contraseña,
        contraseña2,
        tipo


      },
      {
        fields: ['nombre', 'apellido', 'rut','dv','mail','estado','cargo','asesor','telefono'],
      }
    );
    if (newUser) {
      return res.json({
        message: "User create",
        newUser,
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
    const allMisiones = await datauser.findAll({
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
    const mision = await user.findOne({
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
    const deleteRowCount = await datauser.destroy({
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

  const misionUpdate = await datauser.update(
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
