import sequelize from 'sequelize';
import {database} from '../database/database';



const provedores = database.define('provedore',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nombre:{
        type: sequelize.TEXT
    }, 
    cargo:{
        type: sequelize.TEXT
    }, 
    telefono:{
        type: sequelize.INTEGER
    }, 
    email:{
        type: sequelize.TEXT
    }, 
    emailcontacto:{
        type: sequelize.TEXT
    }, 
    rut:{
        type: sequelize.INTEGER
    }, 
    direccion:{
        type: sequelize.TEXT
    }, 
    pais:{
        type: sequelize.TEXT
    }, 
    creado:{
        type: sequelize.DATE
    },
    
},{
    timestamps: false,
    tableName: 'provedores'
});

export default provedores;