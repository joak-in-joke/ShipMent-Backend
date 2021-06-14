"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DataUsuario",
      [
        {
          id_usuario: 1,
          nombre: "Jhon",
          apellido: "Doe",
          rut: 20456789,
          dv: "k",
          email: "demo@demo.com",
          estado: "Activo",
          cargo: "Auxiliar",
          ciudad: "Santiago",
          asesor: "Ruperto",
          telefono: "+56979934678",
          pass: "password",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DataUsuario", null, {});
  },
};
