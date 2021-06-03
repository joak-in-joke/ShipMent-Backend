import sequelize from 'sequelize';
import {database} from '../database/database';

const documentos = database.define('documentos',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_embarque:{
        type: sequelize.INTEGER
    }
    },{
        timestamps: false,
        tableName: 'documentos'
    });

export default documentos;