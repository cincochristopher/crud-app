import axios from 'axios';
import {
  AUTH_LOGIN,
  AUTH_REGISTER,
  AUTH_LOGOUT,
  GET_USER,
} from '../types';

export default {
  state: () => ({
    authenticated: !!localStorage.getItem('user-token'),
    user: {},
  }),
  mutations: {
    setAuthenticated(state, value) {
      state.authenticated = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
  getters: {
    getAuthenticated(state) {
      return state.authenticated;
    },
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    [GET_USER]: ({ dispatch, commit }, payload) => axios({ url: '/api/user', method: 'GET' })
      .then(({ data }) => {
        commit('setUser', data);
        commit('setAuthenticated', true);
        return data;
      })
      .catch(({ response: { data } }) => {
        commit('setUser', {});
        commit('setAuthenticated', false);
        return data;
      }),
    [AUTH_LOGIN]: ({ dispatch, commit }, payload) => axios({ url: '/api/login', data: payload, method: 'POST' })
      .then(({ data }) => {
        localStorage.setItem('user-token', data.access_token);
        axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
        commit('setAuthenticated', true);
        return data;
      })
      .catch(({ response: { data } }) => {
        data.message && alert(data.message);
        commit('setAuthenticated', false);
        return data;
      }),
    [AUTH_REGISTER]: ({ dispatch, commit }, payload) => axios({ url: '/api/register', data: payload, method: 'POST' })
      .then(({ data }) => {
        localStorage.setItem('user-token', data.access_token);
        axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
        commit('setAuthenticated', true);
        return data;
      })
      .catch(({ response: { data } }) => {
        data.message && alert(data.message);
        commit('setAuthenticated', false);
        return data;
      }),
    [AUTH_LOGOUT]: ({ dispatch, commit }, payload) => axios({ url: '/api/logout', method: 'GET' }).then(() => {
      localStorage.removeItem('user-token');
      delete axios.defaults.headers.common.Authorization;
      commit('setUser', {});
      commit('setAuthenticated', false);
    }),
  },
};
