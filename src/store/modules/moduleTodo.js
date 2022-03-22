import { uid } from 'quasar'

export default {
  state: { todos: [{ id: 1, label: 'fsqd', done: false }] },
  mutations: {
    addTodo (state, todo) {
      console.log('mutations add todo', todo)
      todo.id = uid()
      state.todos.push(todo)
    },
    modifyTodo (state, payload) {
      const index = state.todos.findIndex(t => payload.id === t.id)
      if (index !== undefined) {
        Object.assign(state.todos[index], payload.updates)
      }
    },
    deleteTodo (state, payload) {
      const index = state.todos.findIndex(todo => {
        return todo.id === payload.id
      })
      if (index >= 0) state.todos.splice(index, 1)
    }
  },
  actions: {
    addTodo (context, todo) {
      if (todo == null) return
      context.commit('addTodo', todo)
    },
    toggleTodoDone (context, payload) {
      if (payload == null) return
      context.commit('modifyTodo', payload)
    },
    deleteTodo (context, idTodo) {
      if (idTodo == null) return
      context.commit('deleteTodo', idTodo)
    }
  }
}
