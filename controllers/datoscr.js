const {Router, response} = require('express');
const DatosCR = require("../models/datoscr");
const bcryptjs = require('bcryptjs');

/// METODO DE CONSULTA
const CostaRCDatosGet = (req, res=response) => {

    const {nombreProyecto='no-name', paisEjecuta, fecha_Cierre, nomEstudiante, carnet} = req.query;
    
    res.json({
        msg: "Metodo GET invocado desde el servidor",
        nombreProyecto,
        paisEjecuta,
        fecha_Cierre,
        nomEstudiante,
        carnet
    })
};


//METODO INSERT
const CostaRCDatosPost = async (req, res=response) => {

    const {nomProyecto, paisEjecuta, fecha_Cierre, nomEstudiante, carnet} = req.body;
    const datocr = new DatosCR({nomProyecto, paisEjecuta, fecha_Cierre, nomEstudiante, carnet});

    //METODO PARA GUARDAR
    await datocr.save()

    res.json({
        msg: "POST API -- DatosPOST",
        datocr
    })
};

//// METODO PARA ACTUALIZAR
const CostaRCDatosPut = async (req, res=response) => {
    
    const {id} = req.params;
    const {_id, nomProyecto, paisEjecuta, fecha_Cierre, nomEstudiante, carnet, ...resto} = req.body;

    if(nomProyecto)
    {
        
        resto.nomProyecto = nomProyecto;
    }

    const datocr = await DatosCR.findOneAndUpdate(id, resto);
    res.json(datocr)
    
};

///METODO PARA BORRAR
const CostaRCDatosDelete = async (req, res=response) => {
    const { id } = req.params;

    //Fisicamente lo borramos
    const datocr = await DatosCR.findByIdAndDelete( id );
    res.json(datocr);
};

module.exports = {
    CostaRCDatosGet,
    CostaRCDatosPost,
    CostaRCDatosPut,
    CostaRCDatosDelete
}