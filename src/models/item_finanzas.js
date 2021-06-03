import sequelize from 'sequelize';
import {database} from '../database/database';

const item_finanzas = database.define('item_finanza',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    id_finanza:{
        type: sequelize.INTEGER
    },
    id_proveedor:{
        type: sequelize.INTEGER
    },
    nombre:{
        type: sequelize.TEXT
    },
    monto:{
        type: sequelize.INTEGER
    }
    },{
        timestamps: false,
        tableName: 'item_finanza'
    });

export default item_finanzas;