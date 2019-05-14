// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/build/css/mdb.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import vueSession from './session';
import axios from './backend/vue-axios';
//import VueChatScroll from 'vue-chat-scroll';

Vue.config.productionTip = false;

//Vue.use(VueChatScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  vueSession,
  components: { App },
  template: '<App/>'
});