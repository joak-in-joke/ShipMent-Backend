"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("LineaDeTiempo", {
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
          model: "DataEmbarques",
          key: "id",
          as: "id_embarque",
        },
      },
      fecha_fin: {
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
    await queryInterface.dropTable("LineaDeTiempo");
  },
};
