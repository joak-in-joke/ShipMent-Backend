import sequelize from 'sequelize';
import {database} from '../database/database';

const contacto_proveedor = database.define('contacto_proveedor',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_proveedor:{
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    },
    cargo:{
        type: sequelize.TEXT
    },
    telefono:{
        type: sequelize.INTEGER
    },
    email:{
    type: sequelize.TEXT
    }
    
    },{
        timestamps: false,
        tableName: 'contacto_proveedor'
    });

export default contacto_proveedor;