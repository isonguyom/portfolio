<template>
    <div class="w-100 overflow-x-hidden position-relative">
        <div class="d-flex custom-slider" ref="slider" :style="sliderStyle">
            <div v-for="(slide, index) in posts" :key="index" class="custom-slide position-relative rounded-2">
                <div>
                    <img :src="`/images/${slide.poster}-sm.png`" alt="poster"
                        class="card-img w-100 rounded-2 d-md-none" />
                    <img :src="`/images/${slide.poster}-lg.png`" alt="poster"
                        class="card-img w-100 rounded-2 d-none d-md-block" />
                </div>
                <div
                    class="position-absolute top-0 slide-overlay w-100 h-100 d-flex align-bottom align-items-end p-2 rounded-2">
                    <div
                        class="w-100 h-50 bg-opacity-75 rounded-1 p-3 text-box d-flex flex-column justify-content-center">
                        <div class="w-100">
                            <h4 class="slide-title text-uppercase"><a :href="slide.link" target="_blank">{{ slide.title
                                    }}</a></h4>
                            <p class="slide-desc">{{ slide.excerpt.slice(0, 100).trim() }}...</p>
                            <div
                                class="d-flex align-items-center mt-1 mt-lg-4 border-top pt-2 border-dark border-opacity-10">
                                <span class="me-2 opacity-75">{{ slide.published_date }}</span>
                                <a :href="slide.platform.link" target="_blank"
                                    class="py-1 px-2 blog-link rounded-1 text-decoration-none">{{ slide.platform.name
                                    }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="previousSlide"
            class="position-absolute top-50 translate-middle-y border-0 d-flex justify-content-center align-items-center custom-nav-btn prev fs-3"><i
                class="bi bi-caret-left-fill"></i></button>
        <button @click="nextSlide"
            class="position-absolute top-50 translate-middle-y border-0 d-flex justify-content-center align-items-center custom-nav-btn next fs-3"><i
                class="bi bi-caret-right-fill"></i></button>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

import { useBlogStore } from '@/stores/blog';

const { posts } = useBlogStore()
const currentIndex = ref(0);
const slidesToShow = ref(1); // Default is 1 slide

const gap = ref(20); // Gap between slides (in pixels)

const sliderStyle = computed(() => {
    const slideWidthPercentage = 100 / slidesToShow.value;
    const totalSlideWidth = slideWidthPercentage + (gap.value / window.innerWidth) * 100; // convert pixel gap to percentage
    return {
        transform: `translateX(-${currentIndex.value * totalSlideWidth}%)`,
    };
});

// Function to adjust slides based on screen width
const updateSlidesToShow = () => {
    slidesToShow.value = window.innerWidth > 1023 ? 2 : 1; // Show 2 slides for screens > 1024px
};

// Handle screen resizing
onMounted(() => {
    updateSlidesToShow(); // Check on initial load
    window.addEventListener('resize', updateSlidesToShow); // Update on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1023 && currentIndex.value === posts.length - 1) {
            currentIndex.value = posts.length - 2
        }
    }); // Update on window resize
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateSlidesToShow);
});

const nextSlide = () => {
    if (slidesToShow.value === 2 && currentIndex.value >= posts.length - 2) {
        // Prevent moving past the second-to-last set of slides when showing 2 slides
        currentIndex.value = posts.length - 2;

    } else if (slidesToShow.value === 1 && currentIndex.value >= posts.length - 1) {
        // Prevent moving past the second-to-last set of slides when showing 2 slides
        currentIndex.value = posts.length - 1;
    } else {
        // Increment by slidesToShow (either 1 or 2, depending on screen size)
        currentIndex.value = (currentIndex.value + 1) % posts.length;
    }
};

const previousSlide = () => {
    if (slidesToShow.value === 2 && currentIndex.value <= 0) {
        // Prevent moving before the first slide when showing 2 slides
        currentIndex.value = 0;
    } else if (slidesToShow.value === 1 && currentIndex.value <= 0) {
        // Prevent moving before the first slide when showing 1 slide
        currentIndex.value = 0;
    } else {
        // Decrement by slidesToShow (either 1 or 2, depending on screen size)
        currentIndex.value = (currentIndex.value - 1 + posts.length) % posts.length;
    }
};

</script>

<style scoped>
.custom-slider {
    width: fit-content;
    gap: 20px;
    transition: transform 1s ease-in-out;
    /* Adding transition to the slider */
    will-change: transform;
    /* Optimizes performance during transitions */
}

.custom-slide {
    flex: 0 0 calc(100% / 1);
    /* Default: One slide per view on mobile */
    max-width: calc(100% / var(--slides-to-show, 1));
    /* One slide per view on mobile */
}

.blog-link {
    background-color: white;
    color: var(--bg-body);
    transition: all 1s ease;
}

.blog-link:hover {
    background-color: var(--bg-body);
    color: var(--main);
}

.custom-slide .slide-overlay {
    cursor: crosshair;
    background-color: rgba(0, 0, 0, 0.363);
    transition: background-color 1s ease;
}

.custom-slide .slide-overlay:hover {
    background-color: rgba(0, 0, 0, 0.534);
}

.text-box {
    background: #3aafa9be;
    color: var(--bg-body);
    font-size: medium;
    cursor: default;
}

.custom-slide img {
    height: 500px;
}

.slide-title a {
    color: var(--bg-body);
    text-decoration: none;
    font-weight: 700;
    font-size: medium;
    transition: underline 1s ease
}

.slide-title a:hover {
    text-decoration: underline;
}

.custom-nav-btn {
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.151);
    border-radius: 100%;
    color: #ffffff73
}


.custom-nav-btn:hover {
    background-color: #ffffff1e;
    color: #ffffff
}

.prev {
    left: 1em;
}

.next {
    right: 1em;
}

@media screen and (min-width: 768px) {
    .slide-title a {
        font-size: larger;
    }

    .slide-desc {
        font-size: large;
    }
}

@media screen and (min-width: 1024px) {
    .custom-slide {
        flex: 0 0 calc(100% / 2);
        /* Two slides per view on desktop */
    }
}
</style>
