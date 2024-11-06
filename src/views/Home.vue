<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Wrapper :activeView="view === 'home'">
        <div class="min-vh-100 py-5 px-3 px-sm-5 row m-0 justify-content-between align-items-center w-100">
            <div class="col-12 col-lg-4 p-0">
                <div ref="content">
                    <h3 ref="heading1" class="fs-1 text-white">Hey!</h3>
                    <h1 ref="heading2" class="text-uppercase fw-bold text-main name">I'm Martin</h1>
                    <p ref="description" class="fs-2 text-capitalize mb-4">frontend developer</p>

                    <div ref="socialLinks" class="social-links d-flex">
                        <a v-for="(link, index) in profileLinks" :key="index" :href="`https://${link.link}`"
                            target="_blank" :title="link.name"
                            class="card-link fs-5 d-inline-flex justify-content-center align-items-center border rounded-circle p-2">
                            <i :class="link.icon"></i>
                        </a>
                    </div>
                    <Button ref="button" label="Hire me" aria-label="Navigate to contact me"
                        @click="$emit('changeView', 'contact')" />
                </div>
            </div>
            <div class="col-12 col-lg-8 mt-5 mt-lg-0 p-0 ps-lg-5">
                <ul class="w-100 nav row row-cols-1 row-cols-sm-2 row-gap-4 m-0 p-0">
                    <NavCard v-for="(item, index) in navCards" :key="index" :navItem="item" @changeView="changeView" />
                </ul>
            </div>
        </div>
    </Wrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

import Wrapper from '@/components/Wrapper.vue';
import NavCard from '@/components/NavCard.vue';
import Button from '@/components/Button.vue';

import { useProfilesStore } from '@/stores/profiles';
import { useNavStore } from '@/stores/nav';

const heading1 = ref(null);
const heading2 = ref(null);
const description = ref(null);
const socialLinks = ref(null);
const button = ref(null);

const { profileLinks } = useProfilesStore();
const { navCards } = useNavStore();

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    view: String
});

const emit = defineEmits(['changeView']);

const changeView = (view) => {
    emit('changeView', view);
};

onMounted(() => {
    const elements = [
        { el: heading1.value, delay: 1 },
        { el: heading2.value, delay: 1.2 },
        { el: description.value, delay: 1.4 },
        { el: socialLinks.value, delay: 1.6 },
    ];

    elements.forEach(({ el, delay }) => {
        gsap.from(el, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay,
            ease: 'power3.out',
        });
    });
});

</script>

<style scoped>
.name {
    font-size: 3rem;
    margin: 15px 4;
}

.social-links {
    margin-bottom: 50px;
    gap: 1em;
}

.social-links .card-link {
    height: 50px;
    width: 50px;
    border-color: #ced4da;
    color: #ced4da;
    transition: all 1s ease;
}

.social-links .card-link:hover {
    border-color: var(--main) !important;
    color: var(--main) !important;
}

@media screen and (max-width: 767px) {
    .name {
        font-size: 2.5rem;
    }
}
</style>
