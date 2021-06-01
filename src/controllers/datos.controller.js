import sequelize from 'sequelize';
import datero from '../models/datos';

export async function createDatos(req, res){
    const{banco, tipocuenta, nombre, correo, id_provedor}= req.body;
    try{
        let newDatos = await datero.create({
            banco,
            tipocuenta,
            nombre, 
            correo,
            creado: sequelize.literal('CURRENT_TIMESTAMP'), 
            id_provedor
        }, {
            fields: ['banco', 'tipocuenta', 'nombre', 'correo','creado','id_provedor']

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


export async function getAllDatos(req, res){
    const allDatos = await datero.findAll({
        attributes: ['id', 'banco', 'tipocuenta', 'nombre', 'correo','creado','id_provedor'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allDatos});
}

export async function getDatos(req , res){
    const {id} = req.params;
    try{
        const datos = await datero.findOne({
            where: {
                id
            }
        });
        res.json(datos);
    }
    catch(error){
        console.log(error); 
    }
}

export async function deleteDatos(req, res){
    const {id} = req.params;
    
    try{
        const deleteRowCount = await datero.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Datos eliminados correctamente',
            count: deleteRowCount
        })
        
    }
    catch(error){
        console.log(error)
    }
}

export async function updateDatos (req, res){
    const{id} = req.params;
    const{banco, tipocuenta, nombre, correo, id_provedor}= req.body;
         
    const DatosUpdate = await datero.update({
        banco,
        tipocuenta,
        nombre,
        correo,
        id_provedor
        
    },
    {
        where: {id}
    });
    res.json({
        message: 'Usuario actualizado',
        DatosUpdate
    });

}

