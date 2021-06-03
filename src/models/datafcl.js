import sequelize from 'sequelize';
import {database} from '../database/database';

const datafcl = database.define('datafcl',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_data:{
        type: sequelize.INTEGER
    },
    deposito_contenedores:{
        type: sequelize.TEXT
    },
    cont_tipo:{
        type: sequelize.TEXT
    },
    sello:{
        type: sequelize.TEXT
    },
    puerto_destino:{
        type: sequelize.TEXT
    },
    lugar_destino:{
        type: sequelize.TEXT
    }
    },{
        timestamps: false,
        tableName: 'datafcl'
    });

export default datafcl;