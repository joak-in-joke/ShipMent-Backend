const { response } = require("express");

var models = require("../../models");

var LineaDeTiempo = models.LineaDeTiempo;
var Embarque = models.Embarque;

const endTimeline = async ( req, res = response ) => {
    const {
        id,
        id_embarque
    } = req.body;
    const fecha_fin = new Date();
    try { 
        LineaDeTiempo.update(
            { 
                fecha_fin, 
            },
            {
                where: { id:id, id_embarque:id_embarque },
            }
        );
        Embarque.update(
            {
                estado:4,
            },
            {
                where: { id:id_embarque }
            }
        );
        res.json({
            resultado: true,
            message: "Embarque finalizado.",
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({ resultado: false, message: error });
    }
};

module.exports = endTimeline;