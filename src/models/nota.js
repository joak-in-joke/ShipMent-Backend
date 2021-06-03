import sequelize from 'sequelize';
import {database} from '../database/database';

const nota = database.define('nota',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_usuario:{
        type: sequelize.INTEGER
    },
    contenido:{
        type: sequelize.TEXT
    },
    creado:{
        type: sequelize.DATE
    }
    },{
        timestamps: false,
        tableName: 'nota'
    });

export default nota;