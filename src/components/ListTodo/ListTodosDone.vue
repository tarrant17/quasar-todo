<template>
  <todos-header>Terminés</todos-header>
  <spinner-api v-if="loading" />
  <q-list v-else-if="todosDone.length > 0" separator>
    <todo-item
      v-for="todo in todosDone"
      :key="todo.id"
      :todo="todo"
      :bgColor="backgroundColor"/>
  </q-list>
  <div v-else :class="backgroundColor" class="text-white text-center q-py-xl">
    Aucun Todos terminés
  </div>
</template>
<script>
import Todo from './ListItemTodo'
import ListHeaderTodos from './ListHeaderTodos'
import SpinnerAPI from '../SpinnerAPI'

export default {
  props: ['todosDone', 'loading'],
  components: {
    'todo-item': Todo,
    'todos-header': ListHeaderTodos,
    'spinner-api': SpinnerAPI
  },
  // composition api
  setup (props) {
    const backgroundColor = 'bg-green'
    return { backgroundColor }
  }

}
</script>
