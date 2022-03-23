<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
        <q-btn @click="this.showDialogAddTodo = true" color="primary" label="Ajouter" class="center q-ma-xl" />
      </div>
      <div class="q-ma-md">
        <todo-list-not-done :loading="loading" :todosNotDone="todosNotDone"/>
      </div>
      <div class="q-ma-md">
        <todo-list-done :loading="loading" :todosDone="todosDone"/>
      </div>
      <q-dialog v-model="showDialogAddTodo">
        <q-card class="q-pa-xl">
          <todo-form-add  @cancel="this.showDialogAddTodo = false" />
        </q-card>
      </q-dialog>
  </q-page>

</template>

<script>
import ListTodosDone from '../Components/ListTodo/ListTodosDone'
import { defineComponent } from 'vue'
import FormTodoAdd from '../Components/FormTodo/FormTodoAdd'
import ListTodosNotDone from '../Components/ListTodo/ListTodosNotDone'

import axios from 'axios'

export default defineComponent({
  name: 'ListTodos',
  data () {
    return {
      todosDone: [],
      todosNotDone: [],
      loading: true,
      showDialogAddTodo: false
    }
  },
  components: {
    'todo-list-done': ListTodosDone,
    'todo-list-not-done': ListTodosNotDone,
    'todo-form-add': FormTodoAdd
  },
  methods: {
    redirectToAjouterTodo () {
      this.$router.push('/todos/add')
    }
  },
  async mounted () {
    console.log('mounted')
    try {
      const response = await axios.get(
        'http://localhost:3000/todos/'
      )
      // JSON responses are automatically parsed.
      this.todosDone = response.data.filter(todo => todo.done === true)
      this.todosNotDone = response.data.filter(todo => todo.done === false)
      this.loading = false
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
