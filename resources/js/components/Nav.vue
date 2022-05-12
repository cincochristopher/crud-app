<template>
	<div class="wrapper">
		<span v-if="!isLoggedIn">
	    	<a href="/register">Register</a>
	    </span>
	    <span v-if="!isLoggedIn">
	    	<a href="/login">Login</a>
	    </span>
		<span v-if="isLoggedIn">
	    	<a href="#" @click.prevent="logout">Logout</a>
	    </span>
	</div>
</template>

<script>
import { AUTH_LOGOUT } from '../store/types';
import { mapActions, mapState } from 'vuex';
import store from '../store';

export default {
	name: 'Nav',
	computed: {
		...mapState({
			isLoggedIn: (state) => state.auth.authenticated,
		})
	},
	methods: {
		...mapActions({
			logoutUser: AUTH_LOGOUT,
		}),
		logout() {
			this.logoutUser().then(() => {
				this.$router.push({name: 'Login'});
			});
		}
	}
};
</script>