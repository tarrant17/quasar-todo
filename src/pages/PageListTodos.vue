<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
        <q-btn @click="this.showDialogAddTodo = true" color="primary" label="Ajouter" class="center q-ma-xl" />
      </div>
      <div class="q-ma-md">
        <todo-list-done :todosDone="todosDone"/>
      </div>
      <div class="q-ma-md">
        <todo-list-not-done :todosNotDone="todosNotDone"/>
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

import { mapGetters } from 'vueX'

export default defineComponent({
  name: 'ListTodos',
  data () {
    return {
      showDialogAddTodo: false
    }
  },
  components: {
    'todo-list-done': ListTodosDone,
    'todo-list-not-done': ListTodosNotDone,
    'todo-form-add': FormTodoAdd
  },
  computed: {
    ...mapGetters({ todosNotDone: 'todosNotDone', todosDone: 'todosDone' })
  },
  methods: {
    redirectToAjouterTodo () {
      this.$router.push('/todos/add')
    }
  }
})
</script>
