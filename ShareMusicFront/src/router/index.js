import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Sign from '@/pages/Sign';
import TimeLine from '@/pages/TimeLine';
import Perfil from '@/pages/Perfil';
import EdicionPerfil from '@/pages/EdicionPerfil';
import ListaUsuarios from '@/pages/ListaUsuarios';
import Chat from '@/pages/Chat';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/TimeLine',
      name: 'TimeLine',
      component: TimeLine
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: Perfil
    },

    {
      path: '/EdicionPerfil',
      name: 'EdicionPerfil',
      component: EdicionPerfil
    },
    {
      path: '/ListaUsuarios',
      name: 'ListaUsuarios',
      component: ListaUsuarios
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    }
  ]
});
