import sequelize from 'sequelize';
import {database} from '../database/database';

const documentotipo = database.define('emdocumentotipobarque',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    tipo:{
        type: sequelize.TEXT
    }
    
    },{
        timestamps: false,
        tableName: 'documentotipo'
    });

export default documentotipo;