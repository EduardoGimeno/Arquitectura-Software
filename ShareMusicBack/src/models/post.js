const bd = require('../database/queries');

const get_todos_posts = function (req,res) {
    let data = [
        req.body.nombre
    ];
    bd.post_get_todos_posts(data,res)
}
const get_propios_posts = function (req,res) {
    console.log(req)
    let data = [
        req.body.nombre
    ];
   bd.post_get_propios_posts(data,res)
}
const add_post = function (req,res) {
    let data = [
        req.body.nombre,       
        req.body.cuerpo,
        req.body.titulo,
        req.body.img
    ];
    bd.post_add_post(data,res)
}
const borrar_post = function (req,res) {
    let data = [
        req.body.id
    ];
    bd.post_borrar_post(data,res)
}
const editar_post = function (req,res) {
    let data = [
        req.body.cuerpo,
        req.body.titulo,
        req.body.img,
        req.body.id
    ];
    bd.post_editar_post(data,res)
}

const like_post = function (req,res) {
    let data = [
        req.body.id
    ];
    bd.post_like(data,res)
}
const dislike_post = function (req,res) {
    let data = [
        req.body.id
    ];
    bd.post_dislike(data,res)
}
module.exports = {
  get_todos_posts:get_todos_posts,
  get_propios_posts:get_propios_posts,
  add_post:add_post,
  editar_post:editar_post,
  borrar_post:borrar_post,
  like_post:like_post,
  dislike_post:dislike_post
}