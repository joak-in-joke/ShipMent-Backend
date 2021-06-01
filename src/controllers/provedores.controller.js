import sequelize from 'sequelize';
import provedores from '../models/provedores';
import datero from '../models/datos';
export async function createProvedores(req, res){
    
    const {nombre,cargo,telefono,email,emailcontacto,rut,direccion,pais,banco,tipocuenta,correo,nro_cuenta} = req.body;
    try{
     
    
        const newProvedor = await provedores.create({
            nombre,
            cargo,
            telefono,
            email,
            emailcontacto,
            rut,
            direccion,
            pais,
            creado: sequelize.literal('CURRENT_TIMESTAMP'),   
        
        },{
            fields: ['nombre','cargo','telefono','email','emailcontacto','rut','direccion','pais','creado',],
            attributes:['id']
        })
        
        
        if(newProvedor){
            
            const newDatos = await datero.create({
                banco,
                tipocuenta,
                nombre, 
                correo,
                creado: sequelize.literal('CURRENT_TIMESTAMP'), 
                nro_cuenta,
                id_provedor: newProvedor.id
            },{
                fields: ['banco','tipocuenta','nombre','correo','creado','id_provedor']
                
            }) 
                
            
            return res.json({
                message: 'Provedor creado Satisfactoriamente',
                data: newProvedor,newDatos

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


export async function getAllProvedores(req, res){
    const DatosEmpresa = await provedores.findAll({
        attributes: ['id','nombre','cargo','telefono','email','emailcontacto','rut','direccion','pais','creado'],
        order: [
            ['id', 'DESC']
        ]
    });
    const datos = await datero.findAll({
        where: {
            id_provedor:DatosEmpresa.id
        },
        attributes:['id', 'banco', 'tipocuenta', 'nombre', 'correo','creado']
    });
    
    res.json({DatosEmpresa,datos});
}

export async function getProvedores(req , res){
    const {id} = req.params;
    try{
        const mision = await provedores.findOne({
            where: {
                id
            }
        });
        res.json(mision);
    }
    catch(error){
        console.log(error); 
    }
}

export async function deleteProvedores(req, res){
    const {id} = req.params;
    
    try{
        const deleteRowCount = await provedores.destroy({
            where:{
                id
            }
        });
        res.json({
            message: 'Provedor eliminado correctamente',
            count: deleteRowCount
        })
        
    }
    catch(error){
        console.log(error)
    }
}

export async function updateProvedores (req, res){
    const{id} = req.params;
    const{nombre,cargo,telefono,email,emailcontacto,rut,direccion,pais,creado}= req.body;
    console.log(nombre,cargo,telefono,email,emailcontacto,rut,direccion,pais,creado);
   
    
    const misionUpdate = await provedores.update({
        nombre,cargo,telefono,email,emailcontacto,rut,direccion,pais,creado
    },
    {
        where: {id}
    });
    res.json({
        message: 'Provedor actualizado',
        misionUpdate
    });

}

export async function getProvedor (req, res){
    
    const elProvedor = await provedores.findAll({
        attributes: ['nombre','cargo','telefono','email','emailcontacto','rut','direccion','pais','creado'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({elProvedor});
    console.log(elProvedor)
}




