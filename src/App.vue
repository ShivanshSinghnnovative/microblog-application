<template>
    <div>
        <searchHastag :searchValue="searchValue" @clickedTopic="updateSearchTerm" />
    </div>
    <div class="blogContainer">
        <cardDetails v-for="blog in filteredBlogs" :key="blog.id">
            <template v-slot:titles>
                {{ blog.title }}
            </template>
            <template v-slot:description>
                {{ blog.description }}
            </template>
            <template v-slot:footer>
                <div class="like">
                    <img src="../public/red.png" @click="incrementLike(blog)" />
                    {{ blog.like }}
                </div>
                <hastagLists :blog="blog.topics" @clickedTopic="updateSearchTerm" />
            </template>
        </cardDetails>
    </div>
</template>
  
<script setup>
import cardDetails from "./components/cardDetails.vue";
import searchHastag from "./components/searchHastag.vue";
import hastagLists from "./components/hastagLists.vue";
import { useMicroblog } from "./Composables/use-microblog.js";

const {
    searchValue,
    updateSearchTerm,
    filteredBlogs,
    incrementLike,
} = useMicroblog();
</script>
  
  
<style>
* {
    font-family: sans-serif;
}

.like {
    cursor: pointer;
}

.container {
    border: 2px solid lightgray;
    box-shadow: 6px 6px rgb(229, 228, 228);
    width: 20rem;
    border-radius: .5rem;
}

hr {
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
}
</style>