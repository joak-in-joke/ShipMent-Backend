module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ItemFinanza",
      [
        {
          id_finanza: 1,
          id_proveedor: 1,
          concepto: "Flete",
          monto: 234234,
          factura: "EXC",
          fac_tipo: "factura tipo",
          fac_fecha: new Date(),
          estado: "Activo",
          tipo: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ItemFinanza", null, {});
  },
};
