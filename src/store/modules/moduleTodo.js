export default {
  state: { todos: [{ id: 1, label: 'fsqd', done: false }] },
  mutations: {
    addTodo (state, todo) {
      todo.id = state.todos[state.todos.length - 1].id + 1
      state.todos.push(todo)
    },
    modifyTodo (state, payload) {
      const index = state.todos.findIndex(t => payload.id === t.id)
      if (index !== undefined) {
        Object.assign(state.todos[index], payload.updates)
      }
    }
  },
  actions: {
    addTodo (context, todo) {
      if (todo != null) {
        context.commit('addTodo', todo)
      }
    },
    toggleTodoDone (context, payload) {
      console.log('toggleTodoDone', payload)
      if (payload == null) return
      context.commit('modifyTodo', payload)
    }
  }
}
