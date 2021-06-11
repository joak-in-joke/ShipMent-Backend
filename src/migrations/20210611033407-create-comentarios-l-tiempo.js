'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ComentariosLTiempos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_linea_tiempo: {
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER
      },
      contenido: {
        type: Sequelize.TEXT
      },
      creado: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      icono: {
        type: Sequelize.NUMERIC
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ComentariosLTiempos');
  }
};