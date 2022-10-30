const {Router} = require('express');
const {CostaRCDatosGet, 
    CostaRCDatosPost, 
    CostaRCDatosPut, 
    CostaRCDatosDelete} = require('../controllers/datoscr');
const router = Router();

////METODO PARA DEVOLVER VALORES
router.get('/', CostaRCDatosGet);

//CODIGO PARA INSERTAR --- POST
router.post('/', CostaRCDatosPost);

///CODIGO PARA ACTUALIZAR --- PUT
router.put('/:id', CostaRCDatosPut);

//CODIGO PARA BORRAR ---- DELETE
router.delete('/:id', CostaRCDatosDelete);


module.exports = router;