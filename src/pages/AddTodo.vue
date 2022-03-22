<template>
  <q-page class="q-pa-lg flex align-center column">
    <div style="width:50%">
      <form-todo @cancel="redirectToListTodos" title="Ajouter un todo" labelBtnValidate='Ajouter' />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormTodoAdd from '../components/FormTodo/FormTodoAdd'

export default defineComponent({
  name: 'AddTodo',
  computed: {
    todos () {
      return this.$store.state.moduleTodo.todos
    }
  },
  methods: {
    redirectToListTodos () {
      this.$router.push('/todos/list')
    }
  },
  components: {
    'form-todo': FormTodoAdd
  }
})
</script>
