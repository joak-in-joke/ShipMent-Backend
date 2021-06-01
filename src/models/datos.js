import sequelize from 'sequelize';
import {database} from '../database/database';

const datos = database.define('datos',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    banco:{
        type: sequelize.TEXT
    }, 
    tipocuenta:{
        type: sequelize.TEXT
    }, 
    nombre:{
        type: sequelize.TEXT
    }, 
    correo:{
        type: sequelize.TEXT
    }, 
    creado:{
        type: sequelize.TEXT
    },
    id_provedor:{
        type: sequelize.INTEGER
    }
    },{
        timestamps: false,
        tableName: 'datos'
    });

export default datos;