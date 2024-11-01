<template>

    <div id="carouselExampleAutoplaying" class="carousel slide w-100 overflow-hidden vh-100" data-bs-ride="carousel">
        <div class="carousel-inner custom-slider h-100 position-relative w-100">
            <div v-for="(slide, index) in works" :key="index"
                class="carousel-item custom-slide card text-bg-dark w-100 min-vh-100 top-0 start-0"
                :class="{ active: index === 0 }">
                <img :src="`images/${slide.image}.png`" class="card-img w-100 min-vh-100 min-vw-100" alt="..." />
                <div
                    class="card-img-overlay p-0 bg-black bg-opacity-50 rounded-0 vh-100 w-100">
                <div class="text-box-wrapper py-5 px-3 px-sm-5 h-100 d-flex flex-column justify-content-center w-100">
                    <div class="text-box px-md-4">
                        <p class="text-uppercase fw-light">{{ slide.categories }}</p>
                        <h1 class="text-uppercase slide-title">{{ slide.title }}</h1>
                        <div class="card-text text-opacity-75 mb-5">
                            {{ slide.desc }}
                            <p class="mt-2 fw-lighter"><span>Tools:</span> <span class="text-black text-opacity-50">{{
                                slide.tools }}</span></p>
                        </div>
                        <a :href="slide.link" target="_blank" class="view-btn text-decoration-none d-flex py-2 px-5">View work</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev custom-nav top-50 translate-middle-y" type="button"
            data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next custom-nav top-50 translate-middle-y" type="button"
            data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
import { useWorksStore } from '@/stores/works';

const { works } = useWorksStore()

</script>

<style scoped>
.custom-slide {
    position: absolute;
}

.text-box-wrapper {
    max-width: 600px;
    background-color: #3aafa9ef;
    color: var(--bg-body);
}

.slide-title {
    font-weight: bolder;
    color: var(--bg-body);
}


.custom-nav {
    width: 60px;
    height: 60px;
    background-color: #ffffff3a;
    border-radius: 100%;
}

.custom-nav:hover {
    background-color: #ffffff59;

}

.custom-nav.carousel-control-prev {
    left: 0.5em;
}

.custom-nav.carousel-control-next {
    right: 0.5em
}

.view-btn {
    width: fit-content;
    background-color: #ffffff;
    color: var(--bg-body);
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    transition: all 1s ease;
}

.view-btn:hover {
    background-color: var(--bg-body);
    color: var(--main);
}

@media screen and (min-width: 768px) {
    .text-box-wrapper {
        border-top-right-radius: 50%;
        border-bottom-right-radius: 50%;
    }

    .text-box {
        font-size: 1.3rem;
    }

    .slide-title {
        font-size: 2.2rem;
    }

    .custom-nav.carousel-control-prev {
        left: 3em;
    }

    .custom-nav.carousel-control-next {
        right: 3em
    }
}
</style>