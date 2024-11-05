<template>
    <div class="carousel-wrapper card bg-transparent border-0 w-100 d-flex justify-content-center">
        <div class="d-flex flex-column gap-3">
            <div v-for="(skill, index) in skills" :key="index" class="custom-carousel-item">
                <button class="skill-name font-title w-100 rounded-3 fw-bolder text-uppercase text-start border-0 px-2"
                    :class="{ 'text-white': index === currentIndex }" @click.prevent="toggleDesc(index)">
                    {{ skill.name }}
                </button>

                <div :ref="el => (descWrappers[index] = el)" class="mt-2 fs-6 desc" v-show="index === currentIndex">
                    {{ skill.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import gsap from 'gsap';

import { useSkillsStore } from '@/stores/skills';

const { skills } = useSkillsStore();
const currentIndex = ref(0); // Start with no item selected
const descWrappers = ref([]); // Array to store refs for description divs

const toggleDesc = (index) => {
    currentIndex.value = currentIndex.value === index ? null : index;
};

watch(currentIndex, async (newIndex) => {
    if (newIndex !== null) {
        await nextTick(); // Wait for DOM updates
        const descElement = descWrappers.value[newIndex];
        const skillButton = descElement.previousElementSibling; // Reference to skill-name button

        if (descElement) {
            gsap.from(descElement, {
                translateY: -45,
                opacity: 0,
                duration: 0.5,
                ease: 'power1.in'
            });
        }

        if (skillButton) {
            gsap.fromTo(
                skillButton,
                { translateY: -5, scale: 1 },
                { translateY: 0, duration: 0.3, ease: "bounce.out" }
            );
        }
    }
});

</script>

<style scoped>
.d-flex {
    gap: 30px;
}

.custom-carousel-item {
    transition: all 1s ease;
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