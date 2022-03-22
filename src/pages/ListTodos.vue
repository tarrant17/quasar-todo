<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
        <q-btn @click="toogleShowDialogAddTodo" color="primary" label="Ajouter" class="center q-ma-xl" />
      </div>
      <q-list v-if="todos.length>0" bordered separator>
        <todo-item v-for="todo in todos" :key="todo.id" :todo="todo"/>
      </q-list>
      <span v-else class="text-red q-ml-xs">
        Aucun Todos
      </span>
      <q-dialog v-model="showDialogAddTodo">
        <q-card class="q-pa-xl">
          <todo-form @cancel="toogleShowDialogAddTodo" />
        </q-card>
      </q-dialog>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import Todo from '../components/ListItemTodo'
import FormTodo from '../Components/FormTodo/FormTodo'

export default defineComponent({
  name: 'ListTodos',
  data () {
    return {
      showDialogAddTodo: false
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos.todos
    }
  },
  methods: {
    redirectToAjouterTodo () {
      this.$router.push('/todos/add')
    },
    toogleShowDialogAddTodo () {
      this.showDialogAddTodo = !this.showDialogAddTodo
    }
  },
  components: {
    'todo-item': Todo,
    'todo-form': FormTodo
  }
})
</script>
