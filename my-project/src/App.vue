<template>
  <div id="app">
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to="/HelloWorld">hello</router-link></li>      
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
