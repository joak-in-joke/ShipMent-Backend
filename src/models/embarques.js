import sequelize from 'sequelize';
import {database} from '../database/database'; 

const embarques = database.define('embarques',{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    nro_operacion: {
        type: sequelize.INTEGER
    },
    estado:{
        type: sequelize.TEXT
    },
    referencia:{
        type: sequelize.TEXT
    },
    etd:{
        type: sequelize.TEXT
    },
    eta:{
        type: sequelize.TEXT
    },
    observacion:{
        type: sequelize.TEXT
    },
    tipodocumento:{
        type: sequelize.TEXT
    },
    incoterm:{
        type: sequelize.TEXT
    },
    mediotransporte:{
        type: sequelize.TEXT
    },
    aduana:{
        type: sequelize.TEXT
    },
    puertoembarque:{
        type: sequelize.TEXT
    },
    puertodestino:{
        type: sequelize.TEXT
    },
    nombremercancia:{
        type: sequelize.TEXT
    },
    valorusd:{
        type: sequelize.INTEGER
    },
    valorflete:{
        type: sequelize.INTEGER
    },
    valorseguro:{
        type: sequelize.INTEGER
    },
    total:{
        type: sequelize.INTEGER
    },
    trasbordo:{
        type: sequelize.BOOLEAN     
    },
    id_provedor:{
        type: sequelize.INTEGER
    },
    id_personal:{
        type: sequelize.INTEGER
    },
    creado:{
        type: sequelize.DATE
    },
    
},{
    timestamps: false,
    tableName: "embarques"
    
});



export default embarques;



