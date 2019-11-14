<template>
  <div>
    <h2>Add todo</h2>
    <form @submit="addNewTodo" class="mb-5">
      <div class="form-row">
        <div class="form-group col-md-5">
          <label for="text">Your new todo</label>
          <input id="text" name="text" placeholder="Enter your new todo..." :value="newToDo.text" @change="updateNewToDo" class="form-control"  />
        </div>
        <div class="form-group col-md-5">
          <label for="category">Importance</label>
          <select id="category" name="category" :value="newToDo.category" @change="updateNewToDo" class="form-control">
              <option value="Life changing">Life changing</option>
              <option value="Important">Important</option>
              <option value="Meh">Meh</option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-12">
          <button type="submit" class="btn btn-primary">Add to do</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddToDo',
  props: {},
  methods: {
    addNewTodo (e) {
      e.preventDefault()
      this.$store.dispatch('addToDo')
    },
    updateNewToDo (e) {
      const updatedNewTodo = {
        ...this.$store.getters.newToDo,
        [e.target.name]: e.target.value
      }
      this.$store.dispatch('updateNewToDo', updatedNewTodo)
    }
  },
  computed: {
    newToDo () {
      return this.$store.getters.newToDo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
