import sequelize from "sequelize";
import { database } from "../database/database";

const dataembarque = database.define(
  "dataembarque",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    id_embarque: {
      type: sequelize.INTEGER,
    },

    intercom: {
      type: sequelize.TEXT,
    },
    exportador: {
      type: sequelize.TEXT,
    },
    importador: {
      type: sequelize.TEXT,
    },
    embarcador: {
      type: sequelize.TEXT,
    },
    agencia_aduana: {
      type: sequelize.TEXT,
    },
    tipo_documento: {
      type: sequelize.TEXT,
    },
    documento: {
      type: sequelize.TEXT,
    },
    puertoembarque: {
      type: sequelize.TEXT,
    },
    puertodestino: {
      type: sequelize.TEXT,
    },
    lugardestino: {
      type: sequelize.TEXT,
    },
    motonave: {
      type: sequelize.TEXT,
    },
    viaje: {
      type: sequelize.TEXT,
    },
    naviera: {
      type: sequelize.TEXT,
    },
    reserva: {
      type: sequelize.TEXT,
    },
    valor_cif: {
      type: sequelize.INTEGER,
    },

    fecha_inicio: {
      type: sequelize.DATE,
    },
    fecha_fin: {
      type: sequelize.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "dataembarque",
  }
);

export default dataembarque;
