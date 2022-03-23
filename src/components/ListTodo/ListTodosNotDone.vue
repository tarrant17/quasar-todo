<template>
  <q-list v-if="todosNotDone.length > 0" bordered separator>
    <todo-item v-for="todo in todosNotDone" :key="todo.id" :todo="todo"/>
  </q-list>
  <div v-else class="text-red q-ma-md">
    Aucun Todos terminés
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Todo from './ListItemTodo'

export default defineComponent({

  props: ['todosNotDone'],
  components: {
    'todo-item': Todo
  },
  methods: {

  },
  computed: {

  }
})
</script>
