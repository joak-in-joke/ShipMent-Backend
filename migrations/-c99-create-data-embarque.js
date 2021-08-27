"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DataEmbarques", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_embarque: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Embarques",
          key: "id",
          as: "id_embarque",
        },
      },
      id_puerto_embarque: {
        type: Sequelize.INTEGER,
        references: {
          model: "Puertos",
          key: "id",
          as: "id_puerto_embarque",
        },
      },
      id_exportador: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProveedorClientes",
          key: "id",
          as: "id_exportador",
        },
      },
      id_importador: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProveedorClientes",
          key: "id",
          as: "id_importador",
        },
      },
      id_operador: {
        type: Sequelize.INTEGER,
        references: {
          model: "OperadorLogisticos",
          key: "id",
          as: "id_operador",
        },
      },
      id_agencia: {
        type: Sequelize.INTEGER,
        references: {
          model: "AgenciaAduanas",
          key: "id",
          as: "id_agencia",
        },
      },
      tipo_operacion: {
        type: Sequelize.STRING,
      },
      incoterm: {
        type: Sequelize.STRING,
      },
      tipo_documento: {
        type: Sequelize.STRING,
      },
      documento: {
        type: Sequelize.STRING,
      },
      motonave: {
        type: Sequelize.STRING,
      },
      viaje: {
        type: Sequelize.STRING,
      },
      naviera: {
        type: Sequelize.STRING,
      },
      transbordo: {
        type: Sequelize.BOOLEAN,
      },
      reserva: {
        type: Sequelize.STRING,
      },
      valor_cif: {
        type: Sequelize.NUMERIC,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DataEmbarques");
  },
};
