"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DataFCL", {
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
          model: "DataEmbarque",
          key: "id",
          as: "id_data",
        },
      },
      id_puerto_destino: {
        type: Sequelize.INTEGER,
        references: {
          model: "Puerto",
          key: "id",
          as: "id_puerto_destino",
        },
      },
      deposito_contenedores: {
        type: Sequelize.STRING,
      },
      cont_tipo: {
        type: Sequelize.STRING,
      },
      sello: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("DataFCL");
  },
};
