<template>
  <div>
    <h1>Update Todo Item</h1>
    <form v-on:submit.prevent="updateTodo">
      <label>Todo: </label>
     <input required v-model="todoName" type="text"/>
     <button type="submit">Save</button>
    </form>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  import { EDIT_TODO, SHOW_TODO } from '../store/types';

  export default {
    name: 'TodoItem',
    data() {
      return {
        todoName: null,
      }
    },
    computed: {
      ...mapState({
        current: (state) => state.todo.current,
      }),
    },
    created() {
      this.showTodo({id: this.$route.params.id }).then(() => {
        this.todoName = this.current && this.current.name;
      });
    },
    methods: {
      ...mapActions({
        editTodo: EDIT_TODO,
        showTodo: SHOW_TODO,
      }),
      updateTodo() {
        this.editTodo({ ...this.current, name: this.todoName }).then(() => {
          this.$router.push({ name: 'DisplayTodos' });
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