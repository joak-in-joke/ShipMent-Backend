"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "UsuarioProvClis",
      [
        {
          id_usuario: 1,
          id_proveedor_cliente: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UsuarioProvClis", null, {});
  },
};
