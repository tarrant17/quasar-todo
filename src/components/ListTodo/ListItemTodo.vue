<template>
  <q-item :class="bgColor" clickable v-ripple @click="toggleTaskDone(todo)">
    <q-item-section side top >
      <q-checkbox color="green" v-model="taskDone"  />
    </q-item-section>
    <q-item-section :class="{'text-strike' : todo.done}" class="text-white">{{todo.label}}</q-item-section>
    <q-item-section side right class="text-white">
      <div>
        {{formattedDueDate}}
        <q-btn @click.stop="this.showDialogEditTodo = true" flat class="q-ml-md" icon="edit" />
        <q-btn @click.stop="deleteTodo" flat class="q-ml-md" icon="delete" />
      </div>
    </q-item-section>
  </q-item>
   <q-dialog v-model="showDialogEditTodo">
      <q-card class="q-pa-xl">
        <todo-form-edit :todo="todo" @cancel="this.showDialogEditTodo = false" />
      </q-card>
    </q-dialog>
</template>
<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vueX'
import { date } from 'quasar'
import FormTodoEdit from '../FormTodo/FormTodoEdit'

export default defineComponent({
  name: 'todo-item',
  props: ['todo', 'bgColor'],
  emits: ['editTodo'],
  data () {
    return {
      showDialogEditTodo: false
    }
  },
  components: {
    'todo-form-edit': FormTodoEdit
  },
  methods: {
    ...mapActions({ deleteTodoAction: 'deleteTodo', toggleTodoDoneAction: 'toggleTodoDone' }),
    toggleTaskDone () {
      this.toggleTodoDoneAction({ id: this.todo.id, updates: { done: !this.todo.done } })
    },
    editTodo () {
      console.log('editTodo', this.todo.id)
    },
    deleteTodo () {
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
