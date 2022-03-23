<template>
  <todos-header>Terminés</todos-header>
  <q-list v-if="todosDone.length > 0" separator>
    <todo-item v-for="todo in todosDone" :key="todo.id" :todo="todo" :bgColor="backgroundColor"/>
  </q-list>
  <div v-else :class="backgroundColor" class="text-white text-center q-py-xl">
    Aucun Todos terminés
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Todo from './ListItemTodo'
import ListHeaderTodos from './ListHeaderTodos'

export default defineComponent({
  data () {
    return {
      backgroundColor: 'bg-green'
    }
  },
  props: ['todosDone'],
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
