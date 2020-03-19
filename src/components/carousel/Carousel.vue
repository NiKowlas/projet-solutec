<template>
    <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__prev" @click.prevent="prev"></button>
        <button class="carousel__nav carousel__next" @click.prevent="next"></button>
        <div class="carousel__pagination">
            <button v-for="n in sildesCount" @click="goto(n-1)" :class="{active: n-1 === index}" :key="n"></button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index : 0,
            slides: [],
            direction: null
        }
    },
    mounted () {
       this.slides = this.$children
    },
    watch: {
        slides (slides) {
            if(this.index >= this.sildesCount) {
                this.index = this.sildesCount-1
            }
        }
    },
    methods: {
        next () {
            this.index++
            this.direction='right'
            if(this.index >= this.sildesCount){
                this.index=0
            }
        },
        prev () {
            this.index--
            this.direction='left'
            if(this.index < 0){
                this.index=this.sildesCount-1
            }
        },
        goto(index){
            this.direction = index > this.index ? 'right' : 'left'
            this.index = index
        }
    },
    computed: {
        sildesCount () {
            return this.slides.length
        }
    }
}
</script>

<style src="./Carousel.css">
</style>