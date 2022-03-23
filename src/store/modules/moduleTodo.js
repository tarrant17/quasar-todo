import { uid } from 'quasar'

export default {
  state: {
    todos: [
      {
        id: 1,
        label: 'Se laver les dents',
        done: true
      },
      {
        id: 2,
        label: 'Souscrire assurance',
        done: false
      },
      {
        id: 3,
        label: 'Aller au cinéma',
        done: false
      },
      {
        id: 4,
        label: 'Appeler copain',
        done: true
      }
    ]
  },
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
    toggleTodoDone (context, updates) {
      if (updates == null) return
      context.commit('modifyTodo', updates)
    },
    deleteTodo (context, idTodo) {
      if (idTodo == null) return
      context.commit('deleteTodo', idTodo)
    },
    editTodo (context, updates) {
      if (updates == null) return
      context.commit('modifyTodo', updates)
    }
  },
  getters: {
    allTodos: (state) => {
      return state.todos
    },
    todosNotDone: (state) => {
      return state.todos.filter(todo => todo.done === false)
    },
    todosDone: (state) => {
      return state.todos.filter(todo => todo.done === true)
    }
  }
}
