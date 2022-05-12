import Vue from 'vue';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import axios from 'axios';

import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

const token = localStorage.getItem('user-token');
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
new Vue(Vue.util.extend({ router, store }, App)).$mount('#app');
