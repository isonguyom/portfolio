<template>
    <li class="nav-item col m-0 p-0" ref="card">
        <div class="card h-100 bg-white bg-opacity-50 text-white p-2 rounded border-0 shadow-sm w-100">
            <img :src="`images/${navItem.name}.svg`" class="card-img h-100 rounded" alt="poster">
            <button class="btn w-100 h-100 card-img-overlay text-white font-title fs-4 text-capitalize fw-semibold"
                @click="$emit('changeView', navItem.name)" :aria-label="`Navigate to ${navItem.name}`">
                {{ navItem.name }}
            </button>
        </div>
    </li>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    navItem: Object,
});

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['changeView']);
const card = ref(null);

onMounted(() => {
    // Set up the scroll-triggered animation
    gsap.from(card.value, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: card.value,
            start: 'top 100%', // Trigger animation when the top of the card is 90% from the top of the viewport
            toggleActions: 'play none none reset', // Reset on exit, play on re-entry
        },
    });

    // Refresh ScrollTrigger to ensure all in-view animations run on page load
    // ScrollTrigger.refresh();
});

onBeforeUnmount(() => {
    // Clean up ScrollTrigger instances on unmount
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
</script>

<style scoped>
li {
    height: 220px;
}

.card {
    /* From https://css.glass */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: all 1s ease;
}

button {
    background: rgba(0, 0, 0, 0.658);
    transition: all 1s ease;
}

.card:hover {
    transform: scale(1.02);
}

.card:hover button {
    background: rgba(0, 0, 0, 0.863);
    color: var(--main) !important;
}

button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--main);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
}

button:hover::before {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0.1;
}

@media screen and (min-width: 576px) {
    li:nth-child(even) {
        padding-left: 10px !important;
    }

    li:nth-child(odd) {
        padding-right: 10px !important;
    }
}
</style>
