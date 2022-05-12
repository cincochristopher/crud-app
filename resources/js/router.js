import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import CreateTodo from './components/CreateTodo.vue';
import TodoItem from './components/TodoItem.vue';
import store from './store';

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.auth.authenticated) {
    next();
    return;
  }
  next('/todos');
};

const ifAuthenticated = (to, from, next) => {
  if (store.state.auth.authenticated) {
    next();
    return;
  }
  next('/login');
};

const routes = [
  {
    name: 'Register',
    path: '/register',
    component: Register,
    beforeEnter: ifNotAuthenticated,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    name: 'CreateTodo',
    path: '/todos',
    component: CreateTodo,
    beforeEnter: ifAuthenticated,
  },
  {
    name: 'TodoItem',
    path: '/todos/:id',
    component: TodoItem,
    beforeEnter: ifAuthenticated,
  },
];

export default new VueRouter({ mode: 'history', routes });
