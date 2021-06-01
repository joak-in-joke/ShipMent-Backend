import sequelize from 'sequelize';
import {database} from '../database/database'; 

const comentarios = database.define('comentarios',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    comentarios: {
        type: sequelize.TEXT
    },
    creado:{
        type: sequelize.DATE
    },
    embarque_id:{
        type: sequelize.INTEGER
    },
    nombre: {
        type: sequelize.TEXT
    },
    fecha_finalizacion: {
        type: sequelize.DATE
    }
    
},{
    timestamps: false,
    tableName: 'comentarios'
});


export default comentarios;
