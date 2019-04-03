const express = require('express');
const router = express.Router();
const usuario = require('../models/usuario');

router.post('/login',usuario.login); //
router.post('/registro',usuario.registro);//
router.post('/seguir',usuario.seguir);//
router.post('/noseguir',usuario.noseguir);//
router.post('/bloquear',usuario.bloquear);//
router.post('/desbloquear',usuario.desbloquear);//
router.post('/esSeguidor',usuario.esSeguidor);//
router.post('/editarperfil', usuario.editarperfil);//
router.post('/biografia', usuario.biografia);//
router.post('/numBloqueados',usuario.numBloqueados);//
router.post('/numSeguidores',usuario.numSeguidores);//
router.post('/numSeguidos',usuario.numSeguidos);//
router.post('/listBloqueados',usuario.listBloqueados);
router.post('/listSeguidores',usuario.listSeguidores);
router.post('/listSeguidos',usuario.listSeguidos);
router.post('/perfil',usuario.perfil)

//esBloqueado
//editarPerfil con Nombre, email, y password
//en vez de /biografia, una petición /perfil que devuleva todo los datos de un usuario: nombre, nombreReal, email y biografía


module.exports=router;