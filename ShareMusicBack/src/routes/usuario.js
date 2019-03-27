const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario');

router.post('/login',usuario.login);
router.post('/registro',usuario.registro);
router.post('/seguir',usuario.seguir);
router.post('/noseguir',usuario.noseguir);
router.post('/bloquear',usuario.bloquear);
router.post('/desbloquear',usuario.desbloquear);
router.post('/esSeguidor',usuario.esSeguidor);
router.get('/perfil/:id', usuario.perfil);
router.post('/numBloqueados',usuario.numBloquados);
router.post('/numSeguidores',usuario.numSeguidores);
router.post('/numSeguidos',usuario.numSeguidos);


module.exports=router;