"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TransbordoData", {
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
      id_puerto_transbordo: {
        type: Sequelize.INTEGER,
        references: {
          model: "Puerto",
          key: "id",
          as: "id_puerto_transbordo",
        },
      },
      naver_transb: {
        type: Sequelize.STRING,
      },
      fecha_transb: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("TransbordoData");
  },
};
