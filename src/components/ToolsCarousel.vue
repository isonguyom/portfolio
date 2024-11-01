<template>
    <div class="w-100 overflow-x-hidden">
        <div class="slides d-flex justify-content-between" @mouseover="stopAutoplay" @mouseleave="startAutoplay"
            @touchstart="startDrag" @mouseup="endDrag" @touchend="endDrag" @mousemove="onDrag" @touchmove="onDrag">
            <div class="slide py-2 px-1 d-flex justify-content-center align-items-center rounded-3" :title="image.name"
                v-for="(image, index) in visibleSlides" :key="index">
                <img :src="`images/${image.logo}.svg`" :alt="image.name" :title="image.name" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

import { useToolsStore } from '@/stores/tools';

export default {
    setup() {
        const slidesToShow = ref(8);
        const currentSlide = ref(0);
        const images = useToolsStore().tools
        let autoplayInterval = null;
        const gap = ref(20);
        let isDragging = false;
        let startX = 0;

        const visibleSlides = computed(() => {
            const slides = [];
            for (let i = 0; i < slidesToShow.value; i++) {
                slides.push(images[(currentSlide.value + i) % images.length]);
            }
            return slides;
        });

        const sliderStyle = computed(() => {
            const slideWidthPercentage = 100 / slidesToShow.value;
            const totalSlideWidth = slideWidthPercentage + (gap.value / window.innerWidth) * 100; // convert pixel gap to percentage
            return {
                transform: `translateX(-${currentSlide.value * totalSlideWidth}%)`,
            };
        });

        const nextSlide = () => {
            currentSlide.value = (currentSlide.value + 1) % images.length;
        };

        const prevSlide = () => {
            currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
        };

        const startAutoplay = () => {
            autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        };

        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };

        const startDrag = (event) => {
            isDragging = true;
            startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
            stopAutoplay(); // Pause autoplay on drag
        };

        const endDrag = () => {
            isDragging = false;
            startAutoplay(); // Restart autoplay after drag
        };

        const onDrag = (event) => {
            if (!isDragging) return;

            const x = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
            const deltaX = startX - x;

            // Drag threshold to determine slide change
            const threshold = 50; // pixels
            if (Math.abs(deltaX) > threshold) {
                if (deltaX > 0) {
                    nextSlide(); // Dragged left
                } else {
                    prevSlide(); // Dragged right
                }
                startX = x; // Reset startX for the next drag
            }
        };

        onMounted(() => {
            startAutoplay();
        });

        onBeforeUnmount(() => {
            stopAutoplay();
        });

        return {
            currentSlide,
            visibleSlides,
            nextSlide,
            prevSlide,
            sliderStyle,
            startAutoplay,
            stopAutoplay,
            startDrag,
            endDrag,
            onDrag,
        };
    },
};
</script>

<style scoped>
.slides {
    width: 100%;
    min-width: fit-content;
    gap: 1em;
}

.slide {
    height: 70px;
    width: 100px;
    border: 1px solid #6c757d;
    transition: all 1s ease-in;
}

.slide img {
    width: 100%;
    height: 100%;
}
</style>
