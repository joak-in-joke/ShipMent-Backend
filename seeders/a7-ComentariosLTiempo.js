module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ComentariosLTiempo",
      [
        {
          id_linea_tiempo: 1,
          id_usuario: 1,
          contenido: "LLego el paquete a Arabia",
          creado: new Date(),
          estado: 1,
          titulo: "Zapatillas Adidas",
          fecha: new Date(),
          icono: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ComentariosLTiempo", null, {});
  },
};
