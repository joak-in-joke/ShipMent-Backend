import sequelize from "sequelize";
import { database } from "../database/database";

const valordata = database.define(
  "valordata",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    id_data: {
      type: sequelize.INTEGER,
    },
    nombre_mercancia: {
      type: sequelize.TEXT,
    },
    valor_usd: {
      type: sequelize.INTEGER,
    },
    flete_usd: {
      type: sequelize.INTEGER,
    },
    seguro_usd: {
      type: sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    tableName: "valordata",
  }
);

export default valordata;
