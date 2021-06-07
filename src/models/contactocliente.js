import sequelize from "sequelize";
import { database } from "../database/database";

const contactocliente = database.define(
  "contactocliente",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    id_cliente: {
      type: sequelize.INTEGER,
    },
    nombre: {
      type: sequelize.TEXT,
    },
    cargo: {
      type: sequelize.TEXT,
    },
    telefono: {
      type: sequelize.TEXT,
    },
    email: {
      type: sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: "contactocliente",
  }
);

export default contactocliente;
