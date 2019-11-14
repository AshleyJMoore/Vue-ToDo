import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    list: [{
      text: 'Start saving for future',
      category: 'Life changing'
    },
    {
      text: 'Feed my cat',
      category: 'Important'
    },
    {
      text: 'Iron clothes',
      category: 'Meh'
    }],
    newToDo: {
      text: '',
      category: 'Meh'
    }
  },
  mutations: {
    INIT_STORE (state) {
      if (localStorage.getItem('ToDoList')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('ToDoList')))
        )
      }
    },
    ADD_TODO (state) {
      state.list.push(state.newToDo)
      state.newToDo = {
        text: '',
        category: 'Meh'
      }
    },
    UPDATE_TODO (state, pos, todo) {
      state.list[pos] = todo
    },
    DELETE_TODO (state, pos) {
      state.list.splice(pos, 1)
    },
    CLEAR_TODO (state) {
      state.list = []
    },
    UPDATE_NEW_TODO (state, newToDo) {
      state.newToDo = newToDo
    }
  },
  actions: {
    addToDo ({ commit }) {
      commit('ADD_TODO')
    },
    deleteToDo ({ commit }, pos) {
      commit('DELETE_TODO', pos)
    },
    clearToDo ({ commit }) {
      commit('CLEAR_TODO')
    },
    updateNewToDo ({ commit }, todo) {
      commit('UPDATE_NEW_TODO', todo)
    }
  },
  modules: {},
  getters: {
    newToDo: state => state.newToDo,
    list: state => state.list
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('ToDoList', JSON.stringify(state))
})

export default store
