const express = require('express');
const router = express.Router();
const posts = require('../models/post');

router.post('/listarPosts',posts.get_todos_posts);
router.post('/listarPostsUsuario',posts.get_propios_posts);
router.post('/addPost',posts.add_post);
router.post('/borrarPost',posts.borrar_post);
router.post('/editarPost',posts.editar_post);
router.post('/likePost',posts.like_post);
router.post('/dislikePost',posts.dislike_post);


module.exports=router;


