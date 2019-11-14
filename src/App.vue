<template>
  <div id="app">
    <div class="container">
      <ToDo />
    </div>
  </div>
</template>

<script>
import ToDo from './views/ToDo.vue'

export default {
  name: 'app',
  components: {
    ToDo
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
