<template>
  <div>
    <h1 class="mb-5">Ashley's ToDo list</h1>
    <AddToDo />
    <ToDoList />
  </div>
</template>

<script>
import AddToDo from '../components/AddToDo.vue'
import ToDoList from '../components/ToDoList.vue'

export default {
  name: 'ToDo',
  components: {
    AddToDo,
    ToDoList
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
