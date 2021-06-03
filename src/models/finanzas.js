import sequelize from 'sequelize';
import {database} from '../database/database';

const finanzas = database.define('finanza',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_embarque:{
        type: sequelize.INTEGER
    },
    estado:{
        type: sequelize.TEXT
    },
    total:{
        type: sequelize.INTEGER
    }
    },{
        timestamps: false,
        tableName: 'finanza'
    });

export default finanzas;