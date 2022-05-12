<template>
  <div class="form">
    <h1>Register</h1>
    <form v-on:submit.prevent="register">
     <label>Name</label>
     <input required v-model="name" type="text" />
     <label>Email</label>
     <input required v-model="email" type="text" />
     <label>Password</label>
     <input required v-model="password" type="password" />
     <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { AUTH_REGISTER } from '../store/types';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions({
      registerUser: AUTH_REGISTER,
    }),
    register() {
      const { name, email, password } = this;
      this.registerUser({ name, email, password }).then(() => {
        this.$router.push({ name: 'CreateTodo' });
      });
    },
  },
};
</script>
