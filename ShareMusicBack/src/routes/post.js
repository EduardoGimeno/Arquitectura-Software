/**const express = require('express');
const router = express.Router();
const posts = require('../models/post');

 /** router.get('/listarPosts',posts.get_todos_posts);
router.get('/listarPosts/:id_usuario',posts.get_propios_posts);
router.post('/addPost',posts.add_post);
router.post('/borrarPost',posts.borrar_post);
router.post('/editarPost',posts.add_post);


module.exports=router;*/




//Publicar post
    //Parámetros: nombre usuario, título(si lo añadirmos a la BBDD), cuerpo

//Obtener posts de un usuario concreto:
    //Parámetros: nombre usuario
    //Devolución: 
        //Lista de posts del usuario concreto: 
            //Cada post: id del post, usuario creador del post y contenido del post (título y cuerpo)

//Obtener posts del timeline de un usuario:
    //Parámetros: nombre usuario
    //Devolución: 
        //Lista de posts de los usuarios a los que sigue el usuario:
            //Cada post: id del post, usuario creador del post y contenido del post (título y cuerpo)

//Editar post
    //Parámetros: id del post, título(si lo añadirmos a la BBDD), cuerpo

//Eliminar post
    //Parámetros: id del post

//Me gusta post
    //Parámetros: id del post

//No me gusta
    //Parámetros: id del post