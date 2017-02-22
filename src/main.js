import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-47cf9.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$'+value.toLocaleString();
})

const router = new VueRouter({
  routes, // could be routes:routes; same name shortcut
  mode: 'history'
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
