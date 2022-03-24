<template>
  <q-item :class="bgColor" clickable v-ripple @click="toggleTaskDone(todo)">
    <q-item-section side top >
      <q-checkbox color="green" v-model="taskDone"  />
    </q-item-section>
    <q-item-section :class="{'text-strike' : todo.done}" class="text-white">{{todo.label}}</q-item-section>
    <q-item-section side right class="text-white">
      <div>
        {{formattedDueDate}}
        <q-btn @click.stop="showDialogEditTodo = true" flat class="q-ml-md" icon="edit" />
        <q-btn @click.stop="deleteTodo" flat class="q-ml-md" icon="delete" />
      </div>
    </q-item-section>
  </q-item>
   <q-dialog v-model="showDialogEditTodo">
      <q-card class="q-pa-xl">
        <todo-form-edit :todo="todo" @cancel="showDialogEditTodo = false" />
      </q-card>
    </q-dialog>
</template>
<script>
import { ref, computed } from 'vue'
import { date } from 'quasar'
import FormTodoEdit from '../FormTodo/FormTodoEdit'
import { useStore } from 'vuex'

export default {
  props: ['todo', 'bgColor'],
  components: {
    'todo-form-edit': FormTodoEdit
  },

  // composition API
  setup (props, context) {
    const store = useStore()
    const showDialogEditTodo = ref(false)
    function toggleTaskDone () {
      store.dispatch('toggleTodoDone', { id: props.todo.id, updates: { done: !props.todo.done } })
    }
    function deleteTodo () {
      store.dispatch('deleteTodo', { id: props.todo.id })
    }
    const formattedDueDate = computed(() => {
      if (props.todo.dueDate == null) return ''
      const dateJS = date.extractDate(props.todo.dueDate, 'YYYY/MM/DD')
      return date.formatDate(dateJS, 'DD/MM/YYYY')
    })
    const taskDone = computed({
      get: () => { return props.todo.done },
      set: () => { return toggleTaskDone() }
    })
    return { showDialogEditTodo, toggleTaskDone, deleteTodo, formattedDueDate, taskDone }
  }
}
</script>
