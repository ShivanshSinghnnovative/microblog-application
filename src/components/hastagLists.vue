<template>
    <div class="topic" v-for="topic in blog.topics" :key="topic.id" @click="clickedTopic(topic)">
      <a>  # {{ topic }}</a>
    </div>
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    blog: Object,
});
console.log(props);


const emits = defineEmits(['clickedTopic']);

const clickedTopic = (topic) => {
    emits('clickedTopic', topic);
};
</script>

<style>
a{
    border-bottom: 1px solid black;
}
</style>
  