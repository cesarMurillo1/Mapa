const Empresa = require('../models/Empresa');

exports.crearEmpresa = async (req, res) => {
    try {

        let empresa;
        empresa = new Empresa(req.body);
        await empresa.save();
        res.send(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.find()
        res.json(empresas)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')

    }
}

exports.actualizarEmpresa = async (req, res) => {
    try {
        const { nombre, descripcion, ubicacion, año_fundacion, telefono, email, pagina_web, estado } = req.body;
        let empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }

        empresa.nombre = nombre;
        empresa.descripcion = descripcion;
        empresa.ubicacion = ubicacion;
        empresa.año_fundacion = año_fundacion;
        empresa.telefono = telefono;
        empresa.email = email;
        empresa.pagina_web = pagina_web;
        empresa.estado = estado;

        empresa = await Empresa.findByIdAndUpdate({ _id: req.params.id }, empresa, { new: true });
        res.json(empresa);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}


exports.obtenerEmpresa = async (req, res) => {
    try {
        let empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }
        res.json(empresa);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

exports.eliminarEmpresa = async (req, res) => {
    try {
        let empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }

        await Empresa.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: 'Empresa eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}