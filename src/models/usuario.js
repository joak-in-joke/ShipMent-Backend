import sequelize from 'sequelize';
import {database} from '../database/database';

const usuarios = database.define('usuario',{

    id:{
        type: sequelize.INTEGER,
        primaryKey: true
    },                                      //tipo 1: usuario
    tipo:{                                  //tipo 2: SuperUsuario
        type: sequelize.INTEGER             //tipo 3: Admin
    }

    
    },{
        timestamps: false,
        tableName: 'usuario'
    });

export default usuarios;