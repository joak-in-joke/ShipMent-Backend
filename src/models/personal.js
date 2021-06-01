import sequelize from 'sequelize';
import {database} from '../database/database'; 

const personals = database.define('personal',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: sequelize.TEXT
    },
    rut:{
        type: sequelize.INTEGER
    },
    direccion:{
        type: sequelize.TEXT
    },
    cargo: {
        type: sequelize.TEXT
    },
    giro:{
        type: sequelize.TEXT
    },
    asesor:{
        type: sequelize.TEXT
    },
    nacionalidad: {
        type: sequelize.TEXT
    },
    region:{
        type: sequelize.TEXT
    },
    comuna:{
        type: sequelize.TEXT
    },
    creado:{
        type: sequelize.DATE
    },
    telefono:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false,
    tableName: 'personal'
});



export default personals;

