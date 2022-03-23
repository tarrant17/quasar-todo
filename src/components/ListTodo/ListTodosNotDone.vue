<template>
  <todos-header>A faire</todos-header>
  <spinner-api v-if="loading" />
  <q-list v-else-if="todosNotDone.length > 0" separator>
    <todo-item
      v-for="todo in todosNotDone"
      :key="todo.id"
      :todo="todo"
      :bgColor="backgroundColor"/>
  </q-list>
  <div v-else :class="backgroundColor" class="text-white text-center q-py-xl">
    Aucun Todos à faire
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Todo from './ListItemTodo'
import ListHeaderTodos from './ListHeaderTodos'
import SpinnerAPI from '../SpinnerAPI'

export default defineComponent({
  data () {
    return {
      backgroundColor: 'bg-orange'
    }
  },
  props: ['todosNotDone', 'loading'],
  components: {
    'todo-item': Todo,
    'todos-header': ListHeaderTodos,
    'spinner-api': SpinnerAPI
  },
  methods: {

  },
  computed: {

  }
})
</script>
