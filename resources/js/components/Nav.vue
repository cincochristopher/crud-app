<template>
	<nav class="topnav">
		<span v-if="!isLoggedIn">
      <router-link to="/register">Register</router-link>
	    </span>
	    <span v-if="!isLoggedIn">
        <router-link to="/login">Login</router-link>
	    </span>
		  <span class="logout" v-if="isLoggedIn">
	    	<a href="#" @click.prevent="logout">Logout</a>
	    </span>
	</nav>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { AUTH_LOGOUT } from '../store/types';
import store from '../store';

export default {
  name: 'Nav',
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.authenticated,
    }),
  },
  methods: {
    ...mapActions({
      logoutUser: AUTH_LOGOUT,
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
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav .logout {
  float: right;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}
</style>
