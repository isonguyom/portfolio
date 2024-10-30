<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Wrapper :activeView="view === 'home'">
        <div class="min-vh-100 py-5 px-3 px-sm-5 row justify-content-between align-items-center w-100">
            <div class="col-12 col-lg-4">
                <div>
                    <h3 class="fs-1 text-white">Hey!</h3>
                    <h1 class="text-uppercase fw-bold text-main name">I'm Martin</h1>
                    <p class="fs-2 text-capitalize mb-4">frontend developer</p>

                    <div class="social-links d-flex">
                        <a v-for="(link, index) in profileLinks" :key="index" :href="`https://${link.link}`"
                            target="_blank" :title="link.name"
                            class="card-link fs-5 d-inline-flex justify-content-center align-items-center border rounded-circle p-2"><i
                                :class="link.icon"></i></a>
                    </div>
                    <Button label="Hire me"  @click="$emit('changeView', 'contact')"/>
                </div>
            </div>
            <div class="col-12 col-lg-8 mt-5 mt-lg-0 ps-lg-5">
                <ul class="w-100 nav row row-cols-1 row-cols-sm-2 g-4">
                    <NavCard v-for="(item, index) in navCards" :key="index" :navItem="item" @changeView="changeView" />
                </ul>
            </div>
        </div>
    </Wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue';
import NavCard from '@/components/NavCard.vue';
import Button from '@/components/Button.vue';

import { useProfilesStore } from '@/stores/profiles';
import { useNavStore } from '@/stores/nav';

const { profileLinks } = useProfilesStore()
const { navCards } = useNavStore()

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    view: String
})

const emit = defineEmits(['changeView'])

const changeView = (view) => {
    const activeView = view

    emit('changeView', activeView)
};

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
}

.social-links .card-link {
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