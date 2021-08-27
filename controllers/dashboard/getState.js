const { response } = require("express");
var sequelize = require("sequelize");

var models = require("../../models");
var Embarque = models.Embarque;
var DataEmbarque = models.DataEmbarque;
var ValorData = models.ValorData;

const getState = async (req, res = response) => {
  try {
    const allActivos = await Embarque.findAll({
      where: {
        estado: 1,
      },
    });
    const allAbordos = await Embarque.findAll({
      where: {
        estado: 2,
      },
    });
    const allLlegadas = await Embarque.findAll({
      where: {
        estado: 3,
      },
    });
    const allFinalizados = await Embarque.findAll({
      where: {
        estado: 4,
      },
    });
    var FinalizadosId = [];
    var OrigenId = [];
    allFinalizados.forEach(({ id }) => FinalizadosId.push(id));
    allActivos.forEach(({ id }) => OrigenId.push(id));
    const allFin = await DataEmbarque.findAll({
      where: {
        id_embarque: FinalizadosId,
      },
    });

    const allOrigen = await DataEmbarque.findAll({
      where: {
        id_embarque: OrigenId,
      },
    });

    var ValorId = [];
    allFin.forEach(({ id }) => ValorId.push(id));

    const allValue = await ValorData.findAll({
      where: {
        id_data: ValorId,
      },
    });

    const monthCount = new Array(12).fill(0);
    const typeValue = new Array(3).fill(0);
    const dayCount = new Array(31).fill(0);
    allFin.forEach(
      ({ fecha_inicio }) => (monthCount[new Date(fecha_inicio).getMonth()] += 1)
    );
    allValue.forEach((Value) => {
      typeValue[0] += Value.valor_usd;
      typeValue[1] += Value.flete_usd;
      typeValue[2] += Value.seguro_usd;
    });
    allOrigen.forEach(({ fecha_inicio }) => {
      var today = new Date();
      if (today.getMonth() == new Date(fecha_inicio).getMonth()) {
        dayCount[new Date(fecha_inicio).getDate()] += 1;
      }
    });

    const Estado = {
      Activos: allActivos.length,
      Abordos: allAbordos.length,
      Llegadas: allLlegadas.length,
      Finalizados: allFinalizados.length,
      anualGraph: monthCount,
      monthGraph: dayCount,
      valueGraph: typeValue,
    };

    res.json({ resultado: true, data: Estado });
  } catch (error) {
    console.log(error);
    res.status(500).json({ resultado: false, message: error });
  }
};

module.exports = getState;
