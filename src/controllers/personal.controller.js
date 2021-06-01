import sequelize from 'sequelize';
import personal from '../models/personal';

export async function createPersonal(req, res){
    const{nombre, rut, direccion, cargo, giro, asesor, nacionalidad, region, comuna,telefono}= req.body;
    try{
        let newDatos = await personal.create({
            nombre, rut, direccion, cargo, giro, asesor, nacionalidad, region, comuna,
             creado: sequelize.literal('CURRENT_TIMESTAMP'),telefono
        }, {
            fields: ['nombre', 'rut', 'direccion', 'cargo', 'giro', 'asesor', 'nacionalidad', 'region', 'comuna', 'creado','telefono']

        });
        if(newDatos){
            return res.json({
                message: 'datos creados Satisfactoriamente',
                data: newDatos
            });     
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Oops algo salio mal/:'
        })
    }
}


export async function getAllPersonal(req, res){
    const allPersonal = await personal.findAll({
        attributes: ['id','nombre','telefono'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allPersonal});
}

export async function getPersonal(req , res){
    const {id} = req.params;
    try{
        const Personal = await personal.findOne({
            where: {
                id
            }
        });
        res.json(Personal);
    }
    catch(error){
        console.log(error); 
    }
}

export async function deletePersonal(req, res){
    const {id} = req.params;
    
    try{
        const deleteRowCount = await personal.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Personal eliminado correctamente',
            count: deleteRowCount
        })
        
    }
    catch(error){
        console.log(error)
    }
}

export async function updatePersonal (req, res){
    const{id} = req.params;
    const{nombre, rut, direccion, cargo, giro, asesor, nacionalidad, region, comuna, creado, telefono}= req.body;
         
    const PersonalUpdate = await personal.update({
        nombre, rut, direccion, cargo, giro, asesor, nacionalidad, region, comuna, creado, telefono
   
    },
    {
        where: {id}
    });
    res.json({
        message: 'Personal actualizado',
        PersonalUpdate
    });

}


export async function getUsuario(req, res){
    const allMisiones = await personal.findAll({
        attributes: ['id','nombre', 'telefono'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allMisiones});
    console.log(allMisiones)
}


