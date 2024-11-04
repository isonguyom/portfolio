<script setup>
import { ref } from 'vue'
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Works from '@/views/Works.vue';
import Blog from '@/views/Blog.vue';
import Contact from '@/views/Contact.vue';
import FixedNav from '@/components/FixedNav.vue'


let activeView = ref('home')



const displayView = (view) => {
  activeView.value = view
};

</script>

<template>
  <FixedNav v-if="activeView !== 'home'" :activeNav="activeView" @changeView="displayView" />
  <main class="w-100 container-fluid p-0">
    <Home :view="activeView" @changeView="displayView" />
    <About :view="activeView" />
    <Works :view="activeView" />
    <Blog :view="activeView" />
    <Contact :view="activeView" />
  </main>
</template>

<style scoped>
@media screen and (min-width: 1024px) {
  main {
    overflow: hidden;
    max-height: 100vh;
  }
}
</style>
