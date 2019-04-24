import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Sign from '@/pages/Sign';
import TimeLine from '@/pages/TimeLine';
import Perfil from '@/pages/Perfil';
import EdicionPerfil from '@/pages/EdicionPerfil';
import ListaSeguidores from '@/pages/ListaSeguidores';
import ListaSeguidos from '@/pages/ListaSeguidos';
import ListaBloqueados from '@/pages/ListaBloqueados';
import ListaBuscados from '@/pages/ListaBuscados';
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
      path: '/Perfil/:username',
      name: 'Perfil',
      component: Perfil
    },

    {
      path: '/EdicionPerfil',
      name: 'EdicionPerfil',
      component: EdicionPerfil
    },
    {
      path: '/ListaSeguidores/:username',
      name: 'ListaSeguidores',
      component: ListaSeguidores
    },
    {
      path: '/ListaSeguidos/:username',
      name: 'ListaSeguidos',
      component: ListaSeguidos
    },
    {
      path: '/ListaBloqueados/:username',
      name: 'ListaBloqueados',
      component: ListaBloqueados
    },
    {
      path: '/ListaBuscados/:busq',
      name: 'ListaBuscados',
      component: ListaBuscados
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: Chat
    },
  ]
});
