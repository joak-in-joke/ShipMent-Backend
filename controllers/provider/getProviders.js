const { response } = require("express");

var models = require("../../models");
var ProveedorCliente = models.ProveedorCliente;
var CuentaBanco = models.CuentaBanco;
var Contacto = models.Contacto;

const getProviders = async (req, res = response) => {
    try {
        const allProviders = await ProveedorCliente.findAll({
            include: [{
                model: CuentaBanco
            },{
                model: Contacto
            }
            ]
        });

        res.json({ resultado: true, allProviders });   
    } catch (error) {
        console.log(error);
        res.status.json({ resultado: false, message: error});
    }
};

module.exports = getProviders;