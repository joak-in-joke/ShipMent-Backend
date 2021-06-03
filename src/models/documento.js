import sequelize from 'sequelize';
import {database} from '../database/database';

const documento = database.define('documento',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_documentos:{
        type: sequelize.INTEGER
    },
    id_documentotipo:{
        type: sequelize.INTEGER
    },
    archivo:{
        type: sequelize.TEXT
    },
    vers:{
        type: sequelize.INTEGER
    }
    
    },{
        timestamps: false,
        tableName: 'documento'
    });

export default documento;