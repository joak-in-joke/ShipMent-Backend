import sequelize from 'sequelize';
import {database} from '../database/database'; 

const trasbordos = database.define('trasbordo',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    puerto: {
        type: sequelize.TEXT
    },
    nave:{
        type: sequelize.TEXT
    },
    fecha:{
        type: sequelize.DATE
    },
    creado:{
        type: sequelize.DATE
    },
    id_embarque:{
        type: sequelize.INTEGER
    }
},{
    timestamps: false
});



export default trasbordos;

