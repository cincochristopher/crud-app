import Vue from 'vue';
import Vuex from 'vuex';
import { auth, todo } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: { auth, todo },
});
