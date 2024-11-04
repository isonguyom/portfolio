<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <main ref="mainWrapper" class="min-vh-100 w-100 container-fluid p-0"
        :class="{ 'd-block': activeView, 'd-none': !activeView }">
        <slot></slot>
    </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    activeView: Boolean
});

const mainWrapper = ref(null);

onMounted(() => {
    // Initial GSAP animation setup if needed
    gsap.from(mainWrapper.value, {
        duration: 2,
        translateX: -100,
        opacity: 0,
        z: -300,
        ease: "power3.out"
    });
    gsap.set(mainWrapper.value, { transformPerspective: 500 });

});

watch(
    () => props.activeView,
    (newVal) => {
        if (newVal) {
            // Animate the container in
            gsap.from(mainWrapper.value, {
                duration: 2,
                translateX: -100,
                opacity: 0,
                z: -300,
                ease: "power3.out"
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
