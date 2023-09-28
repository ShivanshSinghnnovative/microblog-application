<template>
    <div class="header">
        Search tag 
        <input type="text">
    </div>
    <div class="blogContainer">
    <div class="container" v-for="blogs in blogsData" :key="blogs.id">
        <div class="title">
                 {{ blogs.title }}
        </div>
        <hr/>
        <div class="description">
            {{ blogs.description }}
        </div>
        <hr/>
         <div class="like">
            <img src="/red.png">
          {{ blogs.like }}
         </div>
         <div class="topic" v-for="topic in blogsData.topics" :key="topic.id">
             # {{topic}}
         </div>

    </div>
</div>

</template>

<script setup>


import { ref } from "vue"

    const blogsData = ref([
        {
            id: "1",
            title: "learning Vue.js 3",
            description: "I am learning vue.js with composition Api. I feel great",
            like: 20,
            topics: ["vue-3", "javascript", "composition api"]
        },
        {
            id: "2",
            title: "learning Vuex",
            description: "vuex is a state management pattern + library for Vue.js applications.",
            like: 18,
            topics: ["vue", "Vuex", "flux"]
        },
        {
            id: "3",
            title: "routing with vue router ",
            description: "I am making a complex vue3 app with the help of multi level routing",
            like: 24,
            topics: ["vue-3", "vue-router", "axios"]
        },
        {
            id: "4",
            title: "testing in vue",
            description: "I am writing some test for my vueapp using vue test utilis. it great to learn it",
            like: 17,
            topics: ["vue", "javascript", "testing"]
        }
    ])
</script>

<style scoped>
.container{
    border: 2px solid black;
    box-shadow: 6px 6px lightgray;
    width: 20rem;
    border-radius: .5rem;
}
.blogContainer{
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
}
img{
    height: 12px;
    width: 12px;
}
.title{
    padding: 2rem;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
}
.description{
    height: 8rem;
    padding: 2rem;
    text-align: center;
    font-size: 20px;
}
.like{
    text-align: center;
    font-size: 20px;
    padding: 0.8rem;
}
</style>