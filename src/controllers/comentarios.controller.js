import embarques from '../models/embarques';
import provedor from '../models/provedores';
import comentario from '../models/comentarios';
import sequelize from 'sequelize';


export async function createComentario(req, res){
    const{comentarios, id, nombre,}= req.body;
    try{
        let newCom = await comentario.create({
            comentarios, creado: sequelize.literal('CURRENT_TIMESTAMP'), embarque_id: id, nombre, 
        }, {
            fields: ['comentarios', 'creado', 'embarque_id', 'nombre',]

        });
        if(newCom){
            return res.json({
                message: 'Comentario agregado Satisfactoriamente',
                data: newCom
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


export async function getAllComentarios(req, res){
    const allDatos = await comentario.findAll({
        attributes: ['id', 'comentarios', 'creado', 'embarque_id', 'nombre', 'fecha_finalizacion'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allDatos});
}

export async function getComentario(req , res){
    const {id} = req.params;
    try{
        const datos = await comentario.findOne({
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

export async function deleteComentario(req, res){
    const {id} = req.params;
    
    try{
        const deleteRowCount = await comentario.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Comentario eliminado correctamente',
            count: deleteRowCount
        })
        
    }
    catch(error){
        console.log(error)
    }
}

export async function updateComentario (req, res){
    const{id} = req.params;
    const{comentarios, creado, embarque_id, nombre, fecha_finalizacion}= req.body;
         
    const ComUpdate = await comentario.update({
        comentarios, creado, embarque_id, nombre, fecha_finalizacion
    },
    {
        where: {id}
    });
    res.json({
        message: 'Comentario actualizado',
        ComUpdate
    });

}

export async function getAllComentariosProvedor(req, res) {
    const allGastosComunes = await comentario.findAll({
        attributes: ['comentarios', 'creado', 'embarque_id', 'nombre', 'fecha_finalizacion'],
        order: [
            ['id', 'DESC']
        ],
        
    });
    res.json({Comentarios: allGastosComunes});
};

export async function createReclamos(req, res){ 
    try{
        const {comentarios, id,nombre} = req.body;
        const depto = await embarques.findOne({
            where: {
                id 
            },
            attributes:['id','id_provedor' ]
         
        });
        
        if(depto){
            const prov = await provedor.findOne({
                where:{
                    id: depto.id_provedor
                },
                attributes:['nombre']

                
            });
            const coment = await comentario.create({
                comentarios,
                creado: sequelize.literal('CURRENT_TIMESTAMP'),
                embarque_id: depto.id,
                nombre,
                 
                },
                {
                    fields: ['comentarios', 'creado', 'embarque_id', 'nombre']
                });
                res.json({result: true, message: "Comentario agregado con exito", coment}); 
            }else{
                res.json({result: false, message: "mala tu wea"});
            }
        }
    catch(e){
        console.log(e);
        res.json({result: false, message: "Ha ocurrido un error al crear el la wea"})
    }
};