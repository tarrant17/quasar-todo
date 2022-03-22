<template>
  <form-todo-header>Ajouter un Todo</form-todo-header>
  <q-form @submit="addTodo" class="q-gutter-md rounded-borders">
    <div class="q-pa-md">
      <form-todo-label v-model="todo.label"/>
      <form-todo-duedate v-model="todo.dueDate"/>
      <q-checkbox left-label v-model="todo.done" label="Terminé" />
      <form-todo-actions @cancel="$emit('cancel')"/>
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue'
import { uid } from 'quasar'
import FormTodoHeader from './FormTodoHeader'
import FormTodoLabel from './FormTodoLabel'
import FormTodoDueDate from './FormTodoDueDate'
import FormTodoActions from './FormTodoActions'

export default defineComponent({
  name: 'form-todo',
  components: {
    'form-todo-header': FormTodoHeader,
    'form-todo-label': FormTodoLabel,
    'form-todo-duedate': FormTodoDueDate,
    'form-todo-actions': FormTodoActions
  },
  data () {
    return {
      todo: {
        id: uid(),
        label: '',
        dueDate: null,
        done: false
      }
    }
  },
  emits: ['cancel'],
  methods: {
    addTodo () {
      this.$store.dispatch('addTodo', this.todo)
      this.$emit('cancel')
      this.$router.push('/todos/list')
    },
    redirectToListTodos () {
      this.$router.push('/todos/list')
    }
  }
})
</script>
