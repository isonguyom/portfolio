<template>
    <div class="carousel-wrapper card bg-transparent border-0 w-100 d-flex justify-content-center">
        <div class="d-flex flex-column gap-3">
            <div v-for="(skill, index) in skills" :key="index" class="custom-carousel-item">
                <button class="skill-name font-title w-100 rounded-3 fw-bolder text-uppercase text-start border-0 px-2"
                    :class="{ 'text-white': index === currentIndex }" @click.prevent="toggleDesc(index)">{{ skill.name
                    }}</button>
                <div ref="descWrapper" class="mt-2 fs-6 desc" v-if="index === currentIndex">
                    {{ skill.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import gsap from 'gsap';

import { useSkillsStore } from '@/stores/skills'


const { skills } = useSkillsStore()
const currentIndex = ref(0)
const descWrapper = ref(null)

const toggleDesc = (index) => {
    if (index === currentIndex.value) {
        return currentIndex.value = null
    }
    return currentIndex.value = index
}

watch(
    () => currentIndex.value,
    (newVal) => {
        if (newVal) {
            // Animate the container in
            gsap.from(descWrapper.value, {
                duration: 2,
                rotationX: 45,
                scaleX: 0.5,
                opacity: 0,
                z: -300,
                ease: "power3.out"
            });
        }
    }
);


// onMounted(() => {
//     startCarousel();

// })

// onBeforeUnmount(() => {
//     clearInterval(carouselInterval.value);
// });
</script>

<style scoped>
.d-flex {
    gap: 30px;
}



.skill-name {
    font-size: 2rem;
    background-color: var(--main);
    color: transparent;
    -webkit-text-stroke: 1px var(--bg-body);
    transition: all 1s ease;
}

.skill-name:hover {
    color: var(--bg-body);
}

.desc {
    transition: all 1s ease;
}

@media screen and (min-width: 768px) {
    .skill-name {
        font-size: 3rem;
    }
}
</style>