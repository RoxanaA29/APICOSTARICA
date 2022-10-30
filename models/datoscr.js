const {Schema, model} = require('mongoose');
const dCostaRCchema = Schema({

    nomProyecto: {
        type: String,
        require: [true, "El nombre es requerido"]
    },
    paisEjecuta: {
        type: String,
        require: [true, "El País que ejecuta, es requerido"]
    },
    fecha_Cierre: {
        type: String,
        require: [true, "La fecha es requerida"]
    },
    nomEstudiante: {
        type: String,
        require: [true, "El nombre del estudiante es requerido"]
    },
    carnet: {
        type: String,
        require: [true, "El correo es requerido"]
    }
});

module.exports = model('DatoCR', dCostaRCchema);
