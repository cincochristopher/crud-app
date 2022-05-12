<template>
 <div class="form">
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="text"/>
     <label>Password</label>
     <input required v-model="password" type="password"/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
import { mapActions } from 'vuex';
import { AUTH_LOGIN } from '../store/types';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions({
      loginUser: AUTH_LOGIN,
    }),
    login() {
      const { email, password } = this;
      this.loginUser({ email, password }).then(() => {
        this.$router.push({ name: 'CreateTodo' });
      });
    },
  },
};
</script>
