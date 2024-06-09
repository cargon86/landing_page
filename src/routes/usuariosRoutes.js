const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuariosController');

router.get('/', usuarioController.list);
router.post('/registro', usuarioController.save);

module.exports = router;