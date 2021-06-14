module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Nota",
      [
        {
          id_usuario: 1,
          contenido: "Ir a comprar pan para la convivencia",
          creado: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Nota", null, {});
  },
};
