const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

router.post('/', empresaController.crearEmpresa);
router.get('/', empresaController.obtenerEmpresas);
router.put('/:id', empresaController.actualizarEmpresa);
router.get('/:id', empresaController.obtenerEmpresa);
router.delete('/:id', empresaController.eliminarEmpresa)

module.exports = router;