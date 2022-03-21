<template>
    <h4>Ajouter un Todo</h4>
    <q-form
      @submit="addTodo"
      class="q-gutter-md rounded-borders"
    >
      <q-input v-model="label" label="A faire" />
      <q-btn :class="!this.validateFields() ? 'disabled' : null" type="submit" color="primary" label="Ajouter" />
      <q-btn @click="$emit('cancel')" color="secondary" label="Annuler" />
    </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'form-todo',
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
  emits: ['cancel'],
  methods: {
    addTodo () {
      if (!this.validateFields()) return
      const newTodo = { id: Math.random(), label: this.label, done: false }
      this.$store.dispatch('addTodo', newTodo)
      this.$emit('cancel')
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
