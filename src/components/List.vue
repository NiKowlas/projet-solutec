  
<template>
    <section class="liapp">
        <header class="header">
            <h1>Nouvelle Liste</h1>
            <input type="text" @keyup.enter="addLi" v-model="newLi" class="new-li" placeholder="Ajouter une tâche">

        </header>

        <div class="main">
            <input type="checkbox" v-model="allDone">
            <ul class="li-list">
                <li class="li" :class="{completed: li.completed, editing: li === editing}" v-for="(li, index) in filteredList" :key="index" >
                    <div class="view">
                        <input type="checkbox" v-model="li.completed" >
                        <label @dblclick="editLi(li)">{{li.name}}</label>

                        <button class="destroy" @click.prevent="deleteLi(li)"></button>
                    </div>
                    <input type="text" class="edit" v-model="li.name" @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit" v-focus="li === editing">
                </li>
            </ul>

        </div>
        <footer class="footer" v-show="list.length > 0">
            <span class="li-count">
                <strong>{{ remaining }} </strong> Tâche à faire</span>
                <ul class="filters">
                    <li>
                        <a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">Toutes les tâches</a>
                    </li>
                    <li>
                        <a href="#" :class="{selected: filter === 'li'}" @click.prevent="filter = 'li'">A faire</a>
                    </li>
                    <li>
                        <a href="#" :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'">Faites</a>
                    </li>
                </ul>
                <button class="clear-completed" @click.prevent="deleteCompleted" v-show="completed">Supprimer</button>
        </footer>
    </section>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        value: {type: Array, default(){ return []}}
    },
    data () {
        return {
            list: [{

            }],
            newLi: '',
            filter: 'all',
            editing: null,
            oldLi:''
        }
    },
    methods: {
        addLi() {
            this.list.push({
                completed: false,
                name: this.newLi
            })
            this.newLi=''
        },
        deleteLi(li) {
            this.list = this.list.filter(i => i !== li)
            this.$emit('input', this.list)
        },
        deleteCompleted() {
            this.list = this.list.filter(li => !li.completed)
            this.$emit('input', this.list)
        },
        editLi(li){
            this.editing = li
            this.oldLi = li.name
        },
        doneEdit() {
            this.editing = null
        },
        cancelEdit() {
            this.editing.name = this.oldLi
            this.doneEdit()
        }
    },
    computed: {
        remaining() {
            return this.list.filter(li => !li.completed).length
        },
        filteredList() {
            if(this.filter == 'li'){
                return this.list.filter(li => !li.completed)
            }
            else if(this.filter == 'done'){
                return this.list.filter(li => li.completed)
            }
            
            return this.list
        },
        allDone: {
            get() {
                return this.remaining === 0
            },
            set(value) {
                this.list.forEach(li => {
                    li.completed = value
                })
            }
        },
        completed() {
            return this.list.filter(li => li.completed).length
        }
    },
    directives: {
        focus (el, value) {
            if(value){
                Vue.nextTick(_=> {
                    el.focus()
                })
            }
        }
    }
}
</script>

<style src="./List.css" scoped>
</style>