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
router.post('/editarperfil', usuario.editarperfil);
router.post('/biografia', usuario.biografia);
router.post('/numBloqueados',usuario.numBloqueados);
router.post('/numSeguidores',usuario.numSeguidores);
router.post('/numSeguidos',usuario.numSeguidos);
router.post('/listBloqueados',usuario.listBloqueados);
router.post('/listSeguidores',usuario.listSeguidores);
router.post('/listSeguidos',usuario.listSeguidos);
router.post('/perfil',usuario.perfil);
router.post('/borrar',usuario.borrar);

module.exports=router;

//Cambiar contraseña
    //Parámetros: contraseña antigua y contraseña nueva

//Borrar cuenta
    //Faltaría ---> //Parámetros: contraseña antigua

//Buscar usuarios
    //Parámetros: nombre completo o nombre de usuario

