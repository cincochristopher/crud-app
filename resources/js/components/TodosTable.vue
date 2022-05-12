<template>
  <div>
    <table v-if="todos.length > 0">
      <thead>
        <th>Todo</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="todo in todos">
          <td> {{ formatName(todo.name) }}</td>
          <td>
            <a href="#" @click.prevent="editItem(todo)">Edit</a>
            <a href="#" @click.prevent="deleteItem(todo)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';
  import { EDIT_TODO, DELETE_TODO } from '../store/types';
  import { upperFirst } from 'lodash';

  export default {
    name: 'TodosTable',
    computed: {
      ...mapState({
        todos: (state) => state.todo.all,
      }),
    },
    methods: {
    ...mapActions({
      deleteTodo: DELETE_TODO,
      editTodo: EDIT_TODO,
    }),
    formatName(todo) {
      return upperFirst(todo);
    },
    editItem(todo) {
      console.log('todo: ', todo);
      this.editTodo(todo);
    },
    deleteItem(todo) {
      console.log('todo: ', todo);
      this.deleteTodo(todo);
    },
  }
}
</script>
