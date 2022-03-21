<template>
    <h4>Test</h4>
    <q-btn @click="$emit('test')" color="secondary" label="Test" />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'test-component',
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
  emits: ['test'],
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
  }
})
</script>
