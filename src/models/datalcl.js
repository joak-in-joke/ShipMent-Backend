import sequelize from 'sequelize';
import {database} from '../database/database';

const datalcl = database.define('datalcl',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_data:{
        type: sequelize.INTEGER
    },
    contenedor:{
        type: sequelize.TEXT
    },
    cant_bultos:{
        type: sequelize.INTEGER
    },
    peso:{
        type: sequelize.INTEGER
    },
    volumen:{
        type: sequelize.INTEGER
    },
    lugar_destino:{
        type: sequelize.TEXT
    }    
    },{
        timestamps: false,
        tableName: 'datalcl'
    });

export default datalcl;