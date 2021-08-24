module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DocumentoSingles",
      [
        {
          id_documentos: 1,
          id_tipo: 1,
          archivo: "Firma del presidente",
          version: 1,
          direccion: "example/example/firma.exe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DocumentoSingles", null, {});
  },
};
