<template>
    <div class="topic" v-for="topic in blog" :key="topic.id" @click="clickedTopic(topic)">
        <a> # {{ topic }}</a>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
    blog: Array,
});


const emits = defineEmits(['clickedTopic']);

const clickedTopic = (topic) => {
    emits('clickedTopic', topic);
};
</script>

<style>
a {
    border-bottom: 1px solid black;
}
</style>
  