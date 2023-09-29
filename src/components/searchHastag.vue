<template>
  <div class="header">
    <slot name="search"></slot>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';

const searchHashtag = ref('');

const emit = defineEmits('searchHashtag');

watch(() => {
  emit('searchHashtag', searchHashtag.value);
});
</script>


