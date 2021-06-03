import sequelize from 'sequelize';
import {database} from '../database/database';

const proveedor = database.define('proveedor',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    pais:{
        type: sequelize.TEXT
    },
    direccion:{
        type: sequelize.TEXT
    },
    nombre:{
        type: sequelize.TEXT
    },
    rut:{
        type: sequelize.INTEGER
    },
    telefono:{
    type: sequelize.INTEGER
    },
    email:{
        type: sequelize.TEXT
    }
    },{
        timestamps: false,
        tableName: 'proveedor'
    });

export default proveedor;