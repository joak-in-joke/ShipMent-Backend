import sequelize from "sequelize";
import cuentabanproveedor from "./cuentabanproveedor";
import contactoproveedor from "./contacto_proveedor";
import { database } from "../database/database";

const proveedor = database.define(
  "proveedor",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    pais: {
      type: sequelize.TEXT,
    },
    direccion: {
      type: sequelize.TEXT,
    },
    nombre: {
      type: sequelize.TEXT,
    },
    rut: {
      type: sequelize.INTEGER,
    },
    telefono: {
      type: sequelize.INTEGER,
    },
    email: {
      type: sequelize.TEXT,
    },
  },
  {
    timestamps: false,
    tableName: "proveedor",
  }
  // turnos.belongsTo(users, {foreignKey: 'users_id', sourceKey: 'id'});

  // bodegas.hasMany(productos, {foreignKey: 'bodegas_id', sourceKey: 'id'});
);
proveedor.hasMany(cuentabanproveedor, {
  as: "cuenta_contacto",
  foreignKey: "id_proveedor",
  sourceKey: "id",
});
cuentabanproveedor.belongsTo(proveedor, {
  foreignKey: "id_proveedor",
  sourceKey: "id",
});
proveedor.hasMany(contactoproveedor, {
  as: "contacto_proveedor",
  foreignKey: "id_proveedor",
  sourceKey: "id",
});
contactoproveedor.belongsTo(proveedor, {
  foreignKey: "id_proveedor",
  sourceKey: "id",
});
export default proveedor;
