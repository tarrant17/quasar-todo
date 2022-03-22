<template>
  <q-page class="q-pa-lg flex align-center column">
    <div style="width:50%">
      <form-todo @cancel="redirectToListTodos"/>
    </div>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import FormTodo from '../components/FormTodo/FormTodo'

export default defineComponent({
  name: 'AddTodo',
  computed: {
    todos () {
      return this.$store.state.moduleTodo.todos
    }
  },
  data () {
    return {
      label: ''
    }
  },
  methods: {
    addTodo () {
      if (!this.validateFields()) return
      const newTodo = { id: Math.random(), label: this.label, done: false }
      this.$store.dispatch('addTodo', newTodo)
      this.$router.push('/todos/list')
    },
    validateFields () {
      return this.label != null && this.label !== ''
    },
    redirectToListTodos () {
      this.$router.push('/todos/list')
    }
  },
  components: {
    'form-todo': FormTodo
  }
})
</script>
