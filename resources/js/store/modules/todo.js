import { 
    GET_TODOS,
    EDIT_TODO,
    SHOW_TODO,
    DELETE_TODO,
    ADD_TODO,
} from '../types';

import axios from 'axios';

export default {
  state: () => ({
    all: [],
    current: null,
  }),
  mutations: {
    setTodos(state, value) {
      state.all = value;
    },
    addTodo(state, value) {
      state.all.push(value);
    },
    setCurrentTodo(state, value) {
      state.current = value;
    },
    removeTodo(state, value) {
      const index = state.all.findIndex(a => a.id == value.id);
      if (index > -1) {
        state.all.splice(index, 1);
      }
    }
  },
  getters: {
    getTodos() {
      return state.all;
    }
  },
  actions: {
    [GET_TODOS]: ({ dispatch, commit }, payload) => {
      return axios({ url: '/api/todos', method: 'GET'})
        .then(({ data }) => {
          commit("setTodos", data);
          return data;
        })
        .catch(({ response: { data } }) => {
          commit("setTodos", []);
          return data;
        });
    },
    [ADD_TODO]: ({ dispatch, commit }, payload) => {
      return axios({ url: '/api/todos', data: payload, method: 'POST'})
        .then(({ data }) => {
          commit("addTodo", data);
          return data;
        })
        .catch(({ response: { data } }) => {
          return data;
        });
    },
    [EDIT_TODO]: ({ dispatch, commit }, payload) => {
      return axios({ url: `/api/todos/${payload.id}`, data: payload, method: 'PUT'});
    },
    [SHOW_TODO]: ({ dispatch, commit }, payload) => {
      return axios({ url: `/api/todos/${payload.id}`, method: 'GET'}).then(({data}) => {
        commit("setCurrentTodo", data);
      });
    },
    [DELETE_TODO]: ({ dispatch, commit }, payload)  => {
      return axios({ url: `/api/todos/${payload.id}`, data: payload, method: 'DELETE'})
        .then(() => {
          commit("removeTodo", payload);
        })
    },
  },
};