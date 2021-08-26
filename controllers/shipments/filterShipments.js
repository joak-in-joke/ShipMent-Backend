const { response } = require("express");
var Sequelize = require("sequelize");

var models = require("../../models");
var Embarque = models.Embarque;

const filterShipments = async (req, res = response) => {
  const { filtro, busqueda } = req.body;
  if (busqueda && filtro) {
    var query;
    switch (filtro) {
      case "id":
        query = {
          where: {
            id: busqueda,
          },
        };
        break;

      case "estado":
        query = {
          where: {
            estado: busqueda,
          },
        };
        break;

      case "referencia":
        query = {
          where: {
            referencia: {
              [Sequelize.Op.substring]: busqueda.toUpperCase(),
            },
          },
        };
        break;

      case "etd":
        query = {
          where: {
            etd: busqueda.toString(),
          },
        };

      case "eta":
        query = {
          where: {
            eta: busqueda.toString(),
          },
        };
        break;
    }

    try {
      const filterOf = await Embarque.findAll(query);
      res.json(filterOf);
    } catch (error) {
      console.log(error);
    }
  } else if (busqueda) {
    if (typeof busqueda == "number") {
      query = {
        where: {
          [Sequelize.Op.or]: [{ id: busqueda }, { n_operacion: busqueda }],
        },
      };
    } else if (typeof busqueda == "string") {
      query = {
        where: {
          [Sequelize.Op.or]: [
            { estado: busqueda },
            { referencia: busqueda },
            { medio_transporte: busqueda },
            { tipo_operacion: busqueda },
          ],
        },
      };
    }
    try {
      const filterOf = await Embarque.findAll(query);
      res.json(filterOf);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(await Embarque.findAll());
  }
};

module.exports = filterShipments;
