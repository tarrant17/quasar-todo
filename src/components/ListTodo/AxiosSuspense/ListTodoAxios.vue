<template>
    <q-list v-if="error==null">
      <q-item
          v-for="todo in todos"
          :key="todo.id">
          {{todo.label}}
      </q-item>
    </q-list>
    <p v-else>{{error.message}}</p>
</template>
<script>
import { ref } from 'vue'

export default {
  // composition api
  async setup () {
    const error = ref(null)
    const todos = ref([])
    try {
      const responseJson = await fetch('http://localhost:3000/todos/')
      const response = await responseJson.json()
      todos.value = response
    } catch (e) {
      error.value = e
    }
    return { todos, error }
  }

}
</script>
