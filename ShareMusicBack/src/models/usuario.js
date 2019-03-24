const bd = require('../database/queries');


const login = function (req,res) {
    let data = [
        req.body.email,
        req.body.pass
    ];
    bd.usuario_login(data, res);
}
const registro = function (req,res) {
    let data = [
        req.body.nombre,
        req.body.nombreReal,
        req.body.email,
        req.body.pass
    ];
    
   bd.usuario_registro(data, res);
}
const seguir = function (req,res) {
    let data = [
        req.body.nombre,
        req.body.nombreSeguir
    ];
    bd.usuario_seguir(data, res);
}
const noseguir = function (req,res) {
    let data = [
        req.body.nombre,
        req.body.nombreSeguir
    ];
    console.log(data)
    bd.usuario_dejarseguir(data, res);
}
const bloquear = function (req,res) {
    let data = [
        req.body.nombre,
        req.body.nombreBloquear
    ];
    bd.usuario_bloquear(data, res);
}
const desbloquear = function (req,res) {
    let data = [
        req.body.nombre,
        req.body.nombreBloquear
    ];
    bd.usuario_desbloquear(data, res);
}
const perfil = function (req,res) {
    console.log('perfil');
}
const numSeguidos = function (req,res) {
    let data = [
        req.body.nombre
    ];
    bd.numSeguidos(data,res)
}
const numSeguidores = function (req,res) {
    let data = [
        req.body.nombre
    ];
    bd.numSeguidores(data,res)
}
const numBloqueados = function (req,res) {
    let data = [
        req.body.nombre
    ];
    bd.numBloqueados(data,res)
}
module.exports = {
    login: login,
    registro:registro,
    seguir:seguir,
    noseguir:noseguir,
    bloquear:bloquear,
    perfil:perfil,
    numSeguidos:numSeguidos,
    numSeguidores:numSeguidores,
    numBloquados:numBloqueados,
    desbloquear:desbloquear,
    bloquear:bloquear
}