const Empleado = require('../models/Empleado');

exports.crearEmpleado = async (req, res) => {
    try {

        let empleado;
        empleado = new Empleado(req.body);
        await empleado.save();
        res.send(empleado);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerEmpleados = async (req, res) => {
    try {
        const empleado = await Empleado.find()
        res.json(empleado)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.actualizarEmpleado = async (req, res) => {
    try {
        const { nombres, apellidos, tipo_documento, numero_documento, video, telefono, estado } = req.body;
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            res.status(404).json({ msg: 'No existe el empleado' })
        }

        empleado.nombres= nombres;
        empleado.apellidos = apellidos;
        empleado.tipo_documento = tipo_documento;
        empleado.numero_documento = numero_documento;
        empleado.telefono = telefono;
        empleado.video = video;
        empleado.estado = estado;

        empleado = await Empleado.findByIdAndUpdate({ _id: req.params.id }, empleado, { new: true });
        res.json(empleado);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


exports.obtenerEmpleado = async (req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            res.status(404).json({ msg: 'No existe el empleado' })
        }
        res.json(empleado);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarEmpleado = async (req, res) => {
    try {
        let empleado = await Empleado.findById(req.params.id);

        if (!empleado) {
            res.status(404).json({ msg: 'No existe el empleado' })
        }

        await Empleado.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Empleado eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}