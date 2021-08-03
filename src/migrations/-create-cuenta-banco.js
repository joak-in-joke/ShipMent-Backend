"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CuentaBanco", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_proveedor_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProveedorCliente",
          key: "id",
          as: "id_proveedor_cliente",
        },
      },
      n_cuenta: {
        type: Sequelize.NUMERIC,
      },
      email: {
        type: Sequelize.STRING,
      },
      rut: {
        type: Sequelize.STRING,
      },
      nombre_empresa: {
        type: Sequelize.STRING,
      },
      banco: {
        type: Sequelize.STRING,
      },
      tipo_de_cuenta: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CuentaBanco");
  },
};
