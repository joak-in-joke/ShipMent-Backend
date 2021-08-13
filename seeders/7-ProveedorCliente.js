module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ProveedorCliente",
      [
        {
          pais: "Chile",
          direccion: "Atahualpa",
          nombre: "Google",
          rut: "123124124-k",
          telefono: "+569342346345",
          email: "Hola@hola.cl",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProveedorCliente", null, {});
  },
};
