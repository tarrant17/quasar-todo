<template>
  <q-page class="q-pa-lg flex flex-start column">
      <div class="row">
        <h4>Mes Todos</h4>
      </div>
      <p v-if="error">Error : {{error}}</p>
      <Suspense>
        <template #default>
          <todo-list/>
        </template>
        <template #fallback>
          <spinner-api/>
        </template>
      </Suspense>
  </q-page>
</template>

<script>
import { onErrorCaptured, ref } from 'vue'
import ListTodoAxios from '../Components/ListTodo/AxiosSuspense/ListTodoAxios'
import SpinnerAPI from '../Components/SpinnerAPI'

export default {
  components: {
    'todo-list': ListTodoAxios,
    'spinner-api': SpinnerAPI
  },
  setup () {
    const error = ref(null)
    onErrorCaptured(e => {
      error.value = e
    })
    return { error }
  }
}
</script>
