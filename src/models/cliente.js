import sequelize from "sequelize";
import { database } from "../database/database";

const cliente = database.define(
  "cliente",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: sequelize.TEXT,
    },
    nacionalidad: {
      type: sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: "cliente",
  }
);

export default cliente;
