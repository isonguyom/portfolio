<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Wrapper :activeView="view === 'works'">
    <div class="min-vh-100  w-100 overflow-x-hidden">

      <WorkCarousel />
    </div>
  </Wrapper>
</template>

<script setup>
// import { ref } from 'vue'
import Wrapper from '@/components/Wrapper.vue';
import WorkCarousel from '@/components/WorkCarousel.vue';


// eslint-disable-next-line no-unused-vars
const props = defineProps({
  view: String
})


// const projects = ref([
//   { caption: 'web development', poster: 'poster' },
//   { caption: 'design', poster: 'poster' },
//   { caption: 'big data', poster: 'poster' },
// ])

</script>