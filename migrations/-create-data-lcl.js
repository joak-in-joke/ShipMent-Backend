"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DataLCLs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_data: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "DataEmbarques",
          key: "id",
          as: "id_data",
        },
      },
      id_puerto_destino: {
        type: Sequelize.INTEGER,
        references: {
          model: "Puertos",
          key: "id",
          as: "id_puerto_destino",
        },
      },
      contenedor: {
        type: Sequelize.STRING,
      },
      cant_bultos: {
        type: Sequelize.INTEGER,
      },
      peso: {
        type: Sequelize.NUMERIC,
      },
      volumen: {
        type: Sequelize.NUMERIC,
      },
      lugar_destino: {
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
    await queryInterface.dropTable("DataLCLs");
  },
};
