import sequelize from 'sequelize';
import {database} from '../database/database';

const lineadetiempo = database.define('lineadetiempo',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_embarque:{
        type: sequelize.INTEGER
    },
    estado:{
        type: sequelize.TEXT
    }
    },{
        timestamps: false,
        tableName: 'lineadetiempo'
    });

export default lineadetiempo;