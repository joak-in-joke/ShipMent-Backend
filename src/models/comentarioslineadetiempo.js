import sequelize from 'sequelize';
import {database} from '../database/database';

const comentarioslineadetiempo = database.define('comentarioslineadetiempo',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_linea_tiempo:{
        type: sequelize.INTEGER
    },
    id_usuario:{
        type: sequelize.INTEGER
    },
    contenido:{
        type: sequelize.TEXT
    },
    creado:{
        type: sequelize.DATE
    },
    estado:{
        type: sequelize.TEXT
    },
    titulo:{
        type: sequelize.TEXT
    }
    
    },{
        timestamps: false,
        tableName: 'comentarioslineadetiempo'
    });

export default comentarioslineadetiempo;