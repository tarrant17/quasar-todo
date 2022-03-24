<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
      </div>
      <q-btn
        @click="this.showTablesModeList = !this.showTablesModeList"
        color="secondary"
        class="q-ma-md" label="Toggle résultats mode liste"/>

      <div v-if="showTablesModeList">
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
       </div>
       <q-btn
        @click="this.showTablesModeTable = !this.showTablesModeTable"
        color="secondary"
        class="q-ma-md" label="Toggle résultats mode table"/>
       <div v-if="showTablesModeTable">
        <table-app :rows="todosDone" :loading="loading" />
       </div>
  </q-page>

</template>

<script>
import ListTodosDone from '../Components/ListTodo/ListTodosDone'
import { defineComponent } from 'vue'
import FormTodoAdd from '../Components/FormTodo/FormTodoAdd'
import ListTodosNotDone from '../Components/ListTodo/ListTodosNotDone'

import axios from 'axios'
import TableApp from '../Components/TableApp'

export default defineComponent({
  name: 'ListTodos',
  data () {
    return {
      todosDone: [],
      todosNotDone: [],
      loading: true,
      showDialogAddTodo: false,
      showTablesModeList: true,
      showTablesModeTable: false
    }
  },
  components: {
    'todo-list-done': ListTodosDone,
    'todo-list-not-done': ListTodosNotDone,
    'todo-form-add': FormTodoAdd,
    'table-app': TableApp
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
      console.table(this.todosDone)
      console.table(this.todosDone)
    } catch (error) {
      console.log(error)
    }
  }
})
</script>
