<template>
  <div>
    <h1>Add Todo</h1>
    <form v-on:submit.prevent="saveTodo">
      <label>Todo: </label>
     <input required v-model="todo" type="password"/>
     <button type="submit">Save</button>
    </form>
    <div class="todos-table">
      <TodosTable />
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  import { GET_TODOS, ADD_TODO } from '../store/types';
  import TodosTable from './TodosTable';

  export default {
    name: 'Login',
    components: {
      TodosTable
    },
    data() {
      return {
        todo: null,
      }
    },
    computed: {
      ...mapState({
        todos: (state) => state.todo.all,
      }),
    },
    created() {
      this.getTodos();
    },
    methods: {
      ...mapActions({
        getTodos: GET_TODOS,
        addTodo: ADD_TODO,
      }),
      saveTodo() {
        this.addTodo({ name: this.todo }).then(() => {
          this.todo = null;
        });
      }
  }
}
</script>
<style scoped lang="scss">
.todos-table {
  margin-top: 1rem;
}
</style>