<template>
  <div class="hello">
      <carousel>
        <carousel-slide v-for="n in slides" :index="n-1" :key="n">
          <img :src="'https://picsum.photos/1280/720/?'+n" width="100%">
        </carousel-slide>
      </carousel>
    <!-- <button @click="addSlide">Ajouter un Slide</button>
    <button @click="removeSlide">Supprimer un Slide</button>
   -->
  <list></list>
  </div>
</template>

<script>

import List from '@/components/List'
import CarouselSlide from '@/components/carousel/CarouselSlide'
import Carousel from '@/components/carousel/Carousel'

export default {
  name: 'HelloWorld',
  components: {
    List, Carousel, CarouselSlide
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      slides : 5,
      list: [{
        name: 'Demo',
        completed: true
      }]
    }
  },
  methods: {
    addTodo() {
      this.todos.push({
        name:'test',
        completed: false
      })
      
    },
    addSlide() {
      this.slides++
    },
    removeSlide() {
      this.slides--
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
