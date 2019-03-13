const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario');

router.post('/login',usuario.login);
router.post('/registro',usuario.registro);
router.post('/seguir',usuario.seguir);
router.post('/noseguir',usuario.noseguir);
router.post('/bloquear',usuario.bloquear);
router.get('/perfil/:id', usuario.perfil);


module.exports=router;