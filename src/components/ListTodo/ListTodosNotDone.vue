<template>
  <todos-header>A faire</todos-header>
  <q-list v-if="todosNotDone.length > 0" separator>
    <todo-item v-for="todo in todosNotDone" :key="todo.id" :todo="todo"/>
  </q-list>
  <div v-else class="bg-orange text-white text-center q-py-xl">
    Aucun Todos terminés
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Todo from './ListItemTodo'
import ListHeaderTodos from './ListHeaderTodos'

export default defineComponent({

  props: ['todosNotDone'],
  components: {
    'todo-item': Todo,
    'todos-header': ListHeaderTodos
  },
  methods: {

  },
  computed: {

  }
})
</script>
