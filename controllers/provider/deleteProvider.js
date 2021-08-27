const { response } = require("express");
const Op = require('sequelize').Op;

var models = require("../../models");
var ProveedorCliente = models.ProveedorCliente;
var CuentaBanco = models.CuentaBanco;
var Contacto = models.Contacto;
var UsuarioProvCli = models.UsuarioProvCli;
var DataEmbarque = models.DataEmbarque;


const deleteProvider = async (req, res = response) => {
    const { id } = req.body;
    try {
        const getEmbarques = await DataEmbarque.findOne({
            where: { [Op.or]: [
                { id_exportador: id },
                { id_importador: id },
            ], },
        });
        if(getEmbarques){
            res.json({ resultado: false, message: "Este proveedor tiene embarques asociados" });
        }else{
            await CuentaBanco.destroy({
                where: { id_proveedor_cliente: id },
            });
            await Contacto.destroy({
                where: { id_proveedor_cliente: id },
            });
            await UsuarioProvCli.destroy({
                where: { id_proveedor_cliente: id },
            });
            await ProveedorCliente.destroy({
                where: { id },
            });
            res.json({ resultado: true, message: "Proveedor eliminado"});
        }
        
    } catch(error) {
        console.log(error);
        res.status(400).json({ resultado: false, message: error });
    }
};

module.exports = deleteProvider;
