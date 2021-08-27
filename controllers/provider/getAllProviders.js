const { response } = require("express");

var models = require("../../models");
var ProveedorCliente = models.ProveedorCliente;

const getAllProviders = async (req, res = response) => {
    try {
        const allProvidersNames = await ProveedorCliente.findAll({
            attributes: ['id','nombre']
        });

        res.json({ resultado: true, allProvidersNames });   
    } catch (error) {
        console.log(error);
        res.status.json({ resultado: false, message: error})
    }
};

module.exports = getAllProviders;