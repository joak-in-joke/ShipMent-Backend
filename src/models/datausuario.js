import sequelize from 'sequelize';
import {database} from '../database/database';

const datausuario = database.define('datausuario',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_usuario:{
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    },
    apellido:{
        type: sequelize.TEXT
    },
    rut:{
        type: sequelize.INTEGER
    },
    dv:{
        type: sequelize.TEXT
    },
    mail:{
        type: sequelize.TEXT
    },
    estado:{
        type: sequelize.TEXT
    },
    cargo:{
        type: sequelize.TEXT
    },
    asesor:{
        type: sequelize.TEXT
    },
    telefono:{
        type: sequelize.INTEGER
    },
    direccion:{
        type: sequelize.TEXT
    }
    ,
    comuna:{
        type: sequelize.TEXT
    },
    nacionanilidad:{
        type: sequelize.TEXT
    }
    ,
    contraseña:{
        type: sequelize.TEXT
    }
    ,
    contraseña2:{
        type: sequelize.TEXT
    }
    
    },{
        timestamps: false,
        tableName: 'datausuario'
    });

export default datausuario;

