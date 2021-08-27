const { response } = require("express");
var models = require("../../models");
var ProveedorCliente = models.ProveedorCliente;
var CuentaBanco = models.CuentaBanco;
var Contacto = models.Contacto;

const editProvider = async (req, res = response) => {
    const {
        id,
        pais,
        direccion,
        nombre,
        rut,
        telefono,
        email,
        n_cuenta,
        email_cuentabanco,
        rut_cuentabanco,
        nombre_empresa,
        tipo_de_cuenta,
        nombre_contacto,
        cargo,
    } = req.body;
    try {
        const updateProvider = await ProveedorCliente.update(
            {
                pais,
                direccion,
                nombre,
                rut,
                telefono,
                email,
            },
            {
                where: { id },
            }
        );
        const updateCuentaBanco = await CuentaBanco.update(
            {
                n_cuenta,
                email: email_cuentabanco,
                rut: rut_cuentabanco,
                nombre_empresa,
                tipo_de_cuenta,
                updatedAt,
            },
            {
                where: { id_proveedor_cliente: id },
            }
        );
        const updateContacto = await Contacto.update(
            {
                nombre: nombre_contacto,
                cargo,
                updatedAt,
            },
            { 
                where: { id_proveedor_cliente: id },
            }
        );

        res.json({
            resultado: true,
            message: "Usuario actualizado.",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ resultado: false, message: error });
    }
};

module.exports = editProvider;