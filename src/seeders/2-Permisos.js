"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Permisos",
      [
        {
          id_usuario: 1,
          perm_finanzas: true,
          perm_misiones: true,
          perm_superuser: true,
          perm_admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Permisos", null, {});
  },
};
