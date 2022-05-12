<template>
  <div class="form">
    <table v-if="todos.length > 0">
      <thead>
        <th>Todo</th>
        <th>Actions</th>
      </thead>
      <tbody>
        <tr v-for="todo in todos">
          <td width="80%"> {{ formatName(todo.name) }}</td>
          <td>
            <button class="btn-edit" @click ="editItem(todo)">Edit</button>
            <button class="btn-delete" @click ="deleteItem(todo)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import { upperFirst } from 'lodash';
import { EDIT_TODO, DELETE_TODO } from '../store/types';

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
      this.$router.push({ name: 'TodoItem', params: { id: todo.id } });
    },
    deleteItem(todo) {
      this.deleteTodo(todo);
    },
  },
};
</script>
<style scoped lang="scss">
  table {
    width: 100%;
    th, td {
      text-align: center;
      padding: 12px 20px;
      margin: 8px 0;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
</style>
