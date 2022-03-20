<template>
  <q-item :class="todo.done?'bg-green':'bg-orange'" clickable v-ripple @click="toggleTaskDone(todo)">
    <q-item-section side top>
      <q-checkbox v-model="taskDone"  />
    </q-item-section>
    <q-item-section class="text-white">{{todo.label}}</q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'todo-item',
  props: ['todo'],
  methods: {
    toggleTaskDone () {
      this.$store.dispatch('toggleTodoDone', { id: this.todo.id, updates: { done: !this.todo.done } })
    }
  },
  computed: {
    taskDone: {
      get () { return this.todo.done },
      set () { return this.toggleTaskDone() }
    }
  }
})
</script>
