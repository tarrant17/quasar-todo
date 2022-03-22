<template>
  <form-todo-header>Modifier un todo</form-todo-header>
  <q-form @submit="onSubmitFormEditTodo" class="q-gutter-md rounded-borders">
    <div class="q-pa-md">
      <form-todo-label v-model="todoToSubmit.label"/>
      <form-todo-duedate v-model="todoToSubmit.dueDate"/>
      <q-checkbox left-label v-model="todoToSubmit.done" label="Terminé" />
      <form-todo-actions labelBtnValidate="Modifier" @cancel="$emit('cancel')"/>
    </div>
  </q-form>
  <pre>{{this.todoEnCours}}</pre>
</template>

<script>
import { defineComponent } from 'vue'
import FormTodoHeader from './FormTodoHeader'
import FormTodoLabel from './FormTodoLabel'
import FormTodoDueDate from './FormTodoDueDate'
import FormTodoActions from './FormTodoActions'
import { mapActions } from 'vueX'

export default defineComponent({
  name: 'form-todo',
  props: ['todo'],
  components: {
    'form-todo-header': FormTodoHeader,
    'form-todo-label': FormTodoLabel,
    'form-todo-duedate': FormTodoDueDate,
    'form-todo-actions': FormTodoActions
  },
  data () {
    return {
      todoToSubmit: { ...this.todo }
    }
  },
  emits: ['cancel'],
  methods: {
    ...mapActions({ editTodoAction: 'editTodo' }),
    onSubmitFormEditTodo () {
      console.log('TODO : on submit form edit todo', this.todoToSubmit)
      this.editTodoAction(
        {
          id: this.todoToSubmit.id,
          updates: { ...this.todoToSubmit }
        }
      )
      this.$emit('cancel')
    },
    redirectToListTodos () {
      this.$router.push('/todos/list')
    }
  }
})
</script>
