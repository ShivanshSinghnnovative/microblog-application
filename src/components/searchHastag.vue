<template>
 
    <div class="header">
      Search Hashtag :
      <input type="text" v-model="inputTerm" @input="clickedTopic">
    </div>
  
</template>

<script setup>
import { defineEmits , defineProps, ref , watch} from 'vue';

const inputTerm = ref(props.searchValue);

watch(() => props.searchValue, (newValue) => {
  inputTerm.value = newValue;
});

const props = defineProps({
    searchValue: {
      type:String
    },
});


const emit = defineEmits('clickedTopic');
const clickedTopic =  () => {
  emit('clickedTopic', inputTerm.value);
};
</script>


