import sequelize from "sequelize";
import { database } from "../database/database";

const embarques = database.define(
  "embarque",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    tipo_operacion: {
      type: sequelize.TEXT,
    },
    n_operacion: {
      type: sequelize.INTEGER,
    },
    estado: {
      type: sequelize.TEXT,
    },
    referencia: {
      type: sequelize.TEXT,
    },
    etd: {
      type: sequelize.DATE,
    },
    eta: {
      type: sequelize.DATE,
    },
    medio_transporte: {
      type: sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: "embarque",
  }
);

export default embarques;
