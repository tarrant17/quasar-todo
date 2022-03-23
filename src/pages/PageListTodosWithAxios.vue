<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
        <q-btn @click="this.showDialogAddTodo = true" color="primary" label="Ajouter" class="center q-ma-xl" />
      </div>
      <div class="q-ma-md">
        <todo-list-not-done :todosNotDone="todosNotDone"/>
      </div>
      <div class="q-ma-md">
        <todo-list-done :todosDone="todosDone"/>
      </div>
      <q-dialog v-model="showDialogAddTodo">
        <q-card class="q-pa-xl">
          <todo-form-add @cancel="this.showDialogAddTodo = false" />
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
      posts: [],
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
    },
    async getData () {
      try {
        const response = await axios.get(
          'http://localhost:3000/todos/'
        )
        // JSON responses are automatically parsed.
        console.table(response.data)
        return response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
  async mounted () {
    console.log('mounted')
    const todos = await this.getData()
    this.todosDone = todos.filter(todo => todo.done === true)
    this.todosNotDone = todos.filter(todo => todo.done === false)
  }
})
</script>
