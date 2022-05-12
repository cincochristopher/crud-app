<template>
	<nav class="topnav">
    <span v-if="!isLoggedIn">
      <router-link to="/login">Login</router-link>
    </span>
    <span v-if="!isLoggedIn">
      <router-link to="/register">Register</router-link>
    </span>
	  <span class="logout" v-if="isLoggedIn">
    	<a href="#" @click.prevent="logout">Logout</a>
    </span>
    <span class="logged-in-user" v-if="isLoggedIn">
      Hi, {{ user.name }}
    </span>
	</nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { AUTH_LOGOUT, GET_USER } from '../store/types';
import store from '../store';

export default {
  name: 'Nav',
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.authenticated,
      user: (state) => state.auth.user,
    }),
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapActions({
      logoutUser: AUTH_LOGOUT,
      getUser: GET_USER,
    }),
    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ name: 'Login' });
      });
    },
  },
};
</script>
<style scoped lang="scss">
.topnav {
  background-color: #333;
  overflow: hidden;
}

.topnav a {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .logout {
  float: right;
}

.logged-in-user {
  float: right;
  color: #f2f2f2;
  font-weight: 900;
  display:block;
  margin:10px 10px 0 0;
  padding:5px 10px

}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
</style>
