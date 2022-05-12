import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import DisplayTodos from './components/DisplayTodos.vue';
import DisplayTodoItem from './components/DisplayTodoItem.vue';
import store from './store';
Vue.use(VueRouter);


const ifNotAuthenticated = (to, from, next) => {
  if (!store.state.auth.authenticated) {
    next();
    return;
  }
  next('/todos');
}

const ifAuthenticated = (to, from, next) => {
  if (store.state.auth.authenticated) {
    next();
    return;
  }
  next('/login');
}

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
    name: 'DisplayTodos',
    path: '/todos',
    component: DisplayTodos,
    beforeEnter: ifAuthenticated,
  },
  {
    name: 'DisplayTodoItem',
    path: '/todos/:id',
    component: DisplayTodoItem,
    beforeEnter: ifAuthenticated,
  },
];

export default new VueRouter({ mode: 'history', routes: routes});