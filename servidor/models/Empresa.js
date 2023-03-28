const mongoose = require('mongoose');

const EmpresaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    año_fundacion: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    pagina_web: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Empresa', EmpresaSchema)