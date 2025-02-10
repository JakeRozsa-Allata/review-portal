<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="So you're on the bench. Now what?"/>
</template>

<script>
import HelloWorld from './components/Dashboard/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
