<template>
  <div>
  <div v-if="hasTodos">
    <h2>Current ToDos</h2>
    <ul class="list-group mb-3">
        <li class="list-group-item" v-for="(todo, index) in todos" v-bind:key="index">
            <div class="row">
              <div class="col-md-9">
                <h5>{{todo.text}}</h5>
                <p><small>{{ todo.category }}</small></p>
              </div>
              <div class="col-md-3">
                <button class="btn btn-success float-right" @click="removeTodo(index)">Remove</button>
              </div>
            </div>
        </li>
      </ul>
      <button class="btn btn-danger" @click="clearAll()">Clear ToDo list</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDo',
  props: {},
  methods: {
    addNewTodo (e) {
      e.preventDefault()
      this.$store.dispatch('addToDo')
    },
    removeTodo (pos) {
      this.$store.dispatch('deleteToDo', pos)
    },
    clearAll () {
      this.$store.dispatch('clearToDo')
    }
  },
  computed: {
    todos () {
      return this.$store.getters.list
    },
    hasTodos () {
      return !!this.$store.getters.list.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
