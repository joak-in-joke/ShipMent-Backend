import sequelize from 'sequelize';
import {database} from '../database/database';

const cuentabanproveedor = database.define('cuentabanproveedor',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },
    n_cuenta:{
        type: sequelize.INTEGER
    },
    email:{
        type: sequelize.TEXT
    },
    rut:{
        type: sequelize.INTEGER
    },
    nombre_empresa:{
        type: sequelize.TEXT
    },
    banco:{
        type: sequelize.TEXT
    },
    tipo_cuenta:{
        type: sequelize.TEXT
    }
    
    },{
        timestamps: false,
        tableName: 'cuentabanproveedor'
    });

export default embarques;
