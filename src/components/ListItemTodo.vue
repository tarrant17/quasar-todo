<template>
  <q-item :class="todo.done?'bg-green':'bg-orange'" clickable v-ripple @click="toggleTaskDone(todo)">
    <q-item-section side top >
      <q-checkbox color="green" v-model="taskDone"  />
    </q-item-section>
    <q-item-section class="text-white">{{todo.label}}</q-item-section>
    <q-item-section side right class="text-white">
      <div>
        {{formattedDueDate}}
        <q-btn @click.stop="editTodo" flat class="q-ml-md" icon="edit" />
        <q-btn @click.stop="deleteTodo" flat class="q-ml-md" icon="delete" />
      </div>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vueX'
import { date } from 'quasar'

export default defineComponent({
  name: 'todo-item',
  props: ['todo'],
  methods: {
    ...mapActions({ deleteTodoAction: 'deleteTodo', toggleTodoDoneAction: 'toggleTodoDone' }),
    toggleTaskDone () {
      this.toggleTodoDoneAction({ id: this.todo.id, updates: { done: !this.todo.done } })
    },
    deleteTodo () {
      console.log('deleteTodo', this.todo.id)
      // this.$store.dispatch('deleteTodo', { id: this.todo.id })
      this.deleteTodoAction({ id: this.todo.id })
    }
  },
  computed: {
    taskDone: {
      get () { return this.todo.done },
      set () { return this.toggleTaskDone() }
    },
    formattedDueDate () {
      if (this.todo.dueDate == null) return ''
      const dateJS = date.extractDate(this.todo.dueDate, 'YYYY/MM/DD')
      return date.formatDate(dateJS, 'DD/MM/YYYY')
    }
  }
})
</script>
