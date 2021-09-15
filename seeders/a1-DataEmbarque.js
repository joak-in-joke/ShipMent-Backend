module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "DataEmbarques",
      [
        {
          id_embarque: 1,
          id_puerto_embarque: 1,
          id_exportador: 1,
          id_importador: 1,
          id_operador: 1,
          id_agencia: 1,
          tipo_operacion: "importacion",
          incoterm: "EXW",
          tipo_documento: "0",
          documento: "Excel",
          motonave: "motonave",
          viaje: "Viaje",
          naviera: "naviera",
          transbordo: true,
          reserva: "Reserva",
          valor_cif: 123,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DataEmbarques", null, {});
  },
};
