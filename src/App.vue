<template>
  <div id="app">
    <navbar></navbar>
    <list></list>
    <router-view/>
  </div>
</template>

<script>
import List from './components/List'
import Navbar from '@/components/Navbar'


export default {
  name: 'App',
  components: {
    'List': List,
    'Navbar': Navbar
  },
  data () {
    return {
      list: [{
        name: 'Demo',
        completed: true
      }]
    }
  }
}
</script>

<style>
  

#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
