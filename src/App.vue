<template>
    <div class="header">
        Search Hashtag :
        <input type="text">
    </div>
    <div class="blogContainer">
        <cardDetails v-for="blog in blogData" :key="blog.id">
            <template v-slot:titles>
                {{ blog.title }}
            </template>
            <template v-slot:description>
                {{ blog.description }}
            </template>
            <template v-slot:footer>
              
              <div> 
                <img src="../public/red.png">
                {{ blog.like }}
               </div> 
                <div class="topic" v-for="topic in blog.topics" :key="topic.id" >
                    # {{ topic }}
                </div>
            </template>
        </cardDetails>
    </div>
</template>
  
<script setup>
import cardDetails from './components/cardDetails.vue'
import blogsDatas from './assets/blogData.json'
import { ref } from 'vue'

const blogData = ref(blogsDatas);
</script>
  
<style>
*{
    font-family: sans-serif;
}
.container {
    border: 2px solid lightgray;
    box-shadow: 6px 6px rgb(229, 228, 228);
    width: 20rem;
    border-radius: .5rem;
}

hr{
    border: .3px solid rgb(238, 233, 233);
}
.title {
    padding: 2rem;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    height: 2rem;
}

.description {
    height: 8rem;
    padding: 2rem;
    text-align: center;
    font-size: 20px;
}

.like {
    text-align: center;
    font-size: 20px;
    padding: 0.8rem;
}
.header {
    padding: 2rem;
    font-size: 20px;
}

img {
    height: 17px;
    width: 17px;
}

.blogContainer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
}

input {
    border: none;
    border-bottom: 1px solid gray;
    font-size: 21px;
    padding: .5rem;
}</style>