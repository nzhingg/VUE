<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Users from './Users'
import Footer from './Footer'
import Header from './Header'

export default {
  name: 'home',
  components: {
    "users": Users,
    "app-header": Header,
    "app-footer": Footer
  },
  data() {
    return {
      users:[
        // {name:"nnn",position:"web开发",show:false},
        // {name:"zzz",position:"web开发",show:false},
        // {name:"hhh",position:"web开发",show:false},
        // {name:"iii",position:"web开发",show:false},
        // {name:"nnn",position:"web开发",show:false},
        // {name:"ggg",position:"web开发",show:false},
        // {name:"nnn",position:"web开发",show:false}
      ],
      title:"传递的是一个值,(number string boolean)"
    }
  },
  methods: {
    updateTitle(title){
      this.title=title;
    }
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/users").then((data) => {
      this.users = data.body;
    })
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
