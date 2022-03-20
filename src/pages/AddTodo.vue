<template>
  <q-page class="q-pa-lg flex flex-start column">
    <h4>Ajouter un Todo</h4>
     <q-form
      @submit="addTodo"
      class="q-gutter-md rounded-borders"
    >
      <q-input v-model="label" label="A faire" />
      <q-btn :class="!this.validateFields() ? 'disabled' : null" type="submit" color="primary" label="Ajouter" />
      <q-btn @click="redirectToListTodos()" color="secondary" label="Annuler" />
    </q-form>
  </q-page>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
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
  }
})
</script>
