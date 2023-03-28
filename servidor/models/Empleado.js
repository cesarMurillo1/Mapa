const mongoose = require('mongoose');

const EmpleadoSchema = mongoose.Schema({
    nombres: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    tipo_documento: {
        type: String,
        required: true
    },
    numero_documento: {
        type: Number,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema)