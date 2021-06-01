import sequelize from 'sequelize';
import {database} from '../database/database'; 

const misiones = database.define('misione',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    misiones: {
        type: sequelize.TEXT
    },
    comentarios:{
        type: sequelize.TEXT
    },
    creado:{
        type: sequelize.DATE
    },
    estado:{
        type: sequelize.BOOLEAN
    }
},{
    timestamps: false
});

export default misiones;

