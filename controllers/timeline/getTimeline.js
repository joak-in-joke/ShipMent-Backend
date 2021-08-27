const { response } = require("express");

var models = require("../../models");
var LineaDeTiempo = models.LineaDeTiempo;
var ComentariosLTiempo = models.ComentariosLTiempo;

const getTimeline = async (req, res = response) => {
    const {
        id_embarque
    } = req.params;
    try {
            const timelineDetails = await LineaDeTiempo.findAll({
                include: [
                    { model: ComentariosLTiempo },
                ],
                where: {id: id_embarque},
            }
        );

        res.json({
            resultado: true,
            timelineDetails
        });
    } catch(error) {
        console.log(error);
        res.status(400).json({ resultado: false, message: error });
    }
};

module.exports = getTimeline;