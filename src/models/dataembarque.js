import sequelize from 'sequelize';
import {database} from '../database/database';

const dataembarque = database.define('dataembarque',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_embarque:{
        type: sequelize.INTEGER
    },
    tipo_operacion:{
        type: sequelize.TEXT
    },
    intercom:{
        type: sequelize.TEXT
    },
    exportador:{
        type: sequelize.TEXT
    },
    importador:{
        type: sequelize.TEXT
    },
    embarcador:{
        type: sequelize.TEXT
    },
    agencia_aduana:{
        type: sequelize.TEXT
    },
    tipo_documento:{
        type: sequelize.TEXT
    },
    documento:{
        type: sequelize.TEXT
    },
    motonave:{
        type: sequelize.TEXT
    },
    viaje:{
        type: sequelize.TEXT
    },
    naviera:{
        type: sequelize.TEXT
    },
    transbordo:{
        type: sequelize.BOOLEAN
    },
    reserva:{
        type: sequelize.TEXT
    }
    
    },{
        timestamps: false,
        tableName: 'dataembarque'
    });

export default dataembarque;