<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main v-show="activeView" ref="mainWrapper" class="min-vh-100 w-100 container-fluid p-0">
        <slot></slot>
    </main>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    activeView: Boolean,
});

const mainWrapper = ref(null);

onMounted(() => {
    // Set up initial GSAP animation for `mainWrapper` on page load
    gsap.from(mainWrapper.value, {
        duration: 2,
        translateX: -100,
        opacity: 0,
        ease: 'power3.out',
    });

    // If ScrollTrigger needs perspective, add it
    gsap.set(mainWrapper.value, { transformPerspective: 500 });
});

watch(
    () => props.activeView,
    async (newVal) => {
        if (newVal) {
            await nextTick(); // Ensure that `mainWrapper` and content are fully rendered
            ScrollTrigger.refresh(); // Refresh all ScrollTriggers for correct positioning

            // Animation to re-trigger when `activeView` changes
            gsap.from(mainWrapper.value, {
                duration: 2,
                translateX: -100,
                opacity: 0,
                ease: 'power3.out',
            });
        }
    }
);
</script>

<style scoped>
main {
    transition: none;
    /* Turn off the default CSS transition */
}

@media screen and (min-width: 1024px) {
    main {
        max-height: 100vh;
        overflow: hidden;
    }
}
</style>
