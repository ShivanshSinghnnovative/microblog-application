<template>
  <div class="header">
    <slot name="search"></slot>
  </div>
</template>

<script setup>
import { watch, defineEmits, defineProps } from 'vue';

const props = defineProps({
    searchText: String,
});

console.log(props);

const emit = defineEmits('searchHashtag');

watch(() => {
  emit('searchHashtag', props.searchText);
});
</script>


