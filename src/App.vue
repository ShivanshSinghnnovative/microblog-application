<template>
    <searchHastag @searchHashtag="updateHashTagFilter">
        <template v-slot:search>
            Search Hashtag :
            <input type="text" v-model="searchBar">
        </template>
    </searchHastag>
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
                    <img src="../public/red.png" @click="incrementLike(blog)">
                    {{ blog.like }}
                </div>

                <hastagLists :blog="blog" @clickedTopic="updateSearchHashtag" />
            </template>
        </cardDetails>
    </div>
</template>
  
<script setup>
import cardDetails from './components/cardDetails.vue'
import searchHastag from './components/searchHastag.vue'
import hastagLists from './components/hastagLists.vue'
import blogsDatas from './assets/blogData.json'
import { ref, computed } from 'vue'


const blogData = ref(blogsDatas);
const searchBar = ref('');

const updateSearchHashtag = (topic) => {
    searchBar.value = topic;
};

const updateHashTagFilter = (hashtag) => {
    searchBar.value = hashtag;
};

const filteredBlogs = computed(() => {
    const query = searchBar.value.trim().toLowerCase();

    if (!query) {
        return blogData.value;
    }

    return blogData.value.filter(blog =>
        blog.topics.some(topic => topic.toLowerCase().includes(query))
    );
});

const incrementLike = (blog) => {
    blog.like += 1;
}
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
}</style>