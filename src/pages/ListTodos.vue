<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
        <q-btn @click="redirectToAjouterTodo" color="primary" label="Ajouter" class="center q-ma-xl" />
      </div>
      <q-list bordered separator>
        <todo v-for="todo in todos" :key="todo.id" :todo="todo"/>
      </q-list>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import Todo from '../components/Todo'

export default defineComponent({
  name: 'IndexPage',
  computed: {
    todos () {
      return this.$store.state.todos.todos
    }
  },
  methods: {
    redirectToAjouterTodo () {
      this.$router.push('/todos/add')
    }
  },
  components: {
    todo: Todo
  }
})
</script>
