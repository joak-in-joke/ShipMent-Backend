import sequelize from 'sequelize';
import {database} from '../database/database';

const mision = database.define('mision',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    contenido:{
        type: sequelize.TEXT
    },
    creado:{
        type: sequelize.DATE
    },
    estado:{
        type: sequelize.TEXT
    }
    },{
        timestamps: false,
        tableName: 'mision'
    });

export default mision;