
import embarques from '../models/embarques';
import provedores from '../models/provedores';
import sequelize from 'sequelize';
import comentarios from '../models/comentarios';

export async function createEmbarques(req, res){
    const {nro_operacion,referencia,etd,eta,observacion,tipodocumento,incoterm,mediotransporte,
    aduana,puertoembarque,puertodestino,nombremercancia,valorusd,valorflete,valorseguro,total,trasbordo,provedor} = req.body;
    try{
        const buscarProv = await provedores.findOne({
         while:{
             nombre: provedor
         },
         attributes:['id']
        })
        if(buscarProv){

            let newEmbarque = await embarques.create({
                
                nro_operacion,
                estado:"Activo",
                referencia,
                etd,
                eta,
                observacion,
                tipodocumento,
                incoterm,
                mediotransporte,
                aduana,
                puertoembarque,
                puertodestino,
                nombremercancia,
                valorusd,
                valorflete,
                valorseguro,
                total,
                trasbordo,
                id_provedor: buscarProv.id,
                creado: sequelize.literal('CURRENT_TIMESTAMP')
            }, {
                fields: ['nro_operacion', 'estado', 'referencia','etd','eta','observacion','tipodocumento','incoterm','mediotransporte','aduana','puertoembarque',
                'puertodestino', 'nombremercancia','valorusd','valorflete','valorseguro','total','trasbordo','id_provedor','creado']

            });
            if(newEmbarque){
                return res.json({
                    message: 'Embarque creado Satisfactoriamente',
                    newEmbarque
                });     
            }
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
        })
    }
}


export async function getAllEmbarques(req, res){
    const allMisiones = await embarques.findAll({
        attributes: ['id','nro_operacion', 'estado', 'referencia','etd','eta','observacion','tipodocumento','incoterm','mediotransporte','aduana','puertoembarque',
        'puertodestino', 'nombremercancia','valorusd','valorflete','valorseguro','total','trasbordo','id_provedor','id_personal','creado'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({allMisiones});
}

export async function getEmbarques(req , res){
    const {id} = req.params;
    try{
        const embarque = await embarques.findOne({
            where: {
                id
            }
        });
        


        res.json(embarque);
    }
    catch(error){
        console.log(error); 
    }
}

//al eliminar un embarque elimino los comentarios asociados
export async function deleteEmbarques(req, res){
    const {id} = req.params;
    
    try{
        //eliminar los comentarios y archivos de un embarque 
        
        const deleteComentarios = await comentarios.destroy({
            where:{
                embarque_id:id
            }
        })
            
        const deleteRowCount = await embarques.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Embarque eliminadado correctamente',
            count: deleteRowCount,deleteComentarios
        })
        
    }
    catch(error){
        console.log(error)
    }
}

export async function updateEmbarques (req, res){
    const{id} = req.params;
    const{nro_operacion,estado,referencia,etd,eta,observacion,tipodocumento,incoterm,mediotransporte,
        aduana,puertoembarque,puertodestino,nombremercancia,valorusd,valorflete,valorseguro,total,trasbordo,
    id_personal,provedor}= req.body;
    console.log(id, nro_operacion,estado,referencia,etd,eta,observacion,tipodocumento,incoterm,mediotransporte,
        aduana,puertoembarque,puertodestino,nombremercancia,valorusd,valorflete,valorseguro,total,trasbordo,
    id_personal,provedor);
   

    const buscarProv = await provedores.findOne({
        where:{
            nombre: provedor
        },
        attributes:['id']
       })
    
    const EmbarquesUpdate = await embarques.update({
        nro_operacion,
        estado,
        referencia,
        etd,
        eta,
        observacion,
        tipodocumento,
        incoterm,
        mediotransporte,
        aduana,
        puertoembarque,
        puertodestino,
        nombremercancia,
        valorusd,
        valorflete,
        valorseguro,
        total,
        trasbordo,
        id_personal,   
    },
    {
        where: {id}
    });
    if (buscarProv){
        const EmbarquesUpdate = await embarques.update({  
        id_provedor: buscarProv.id
        },
        {
         where: {
            id: buscarProv.id 
        }
    });  
            
            
        }
        res.json({
        message: 'Embarque actualizado',
        EmbarquesUpdate,buscarProv

});
}
export async function getActivos(req, res){
    const allMisiones = await embarques.findAll({
        attributes: ['id','nro_operacion', 'estado', 'referencia','etd','eta','observacion'],
        order: [
            ['id', 'DESC']
        ],
        where: {
            estado: 'Activo'
        }
    });
    res.json({allMisiones});
}

export async function getFinalizados(req, res){
    const allMisiones = await embarques.findAll({
        attributes: ['id','nro_operacion', 'estado', 'referencia','etd','eta','observacion'],
        order: [
            ['id', 'DESC']
        ],
        where: {
            estado: 'Finalizado'
        }
    });
    res.json({allMisiones});
}




