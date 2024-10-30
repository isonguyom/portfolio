<template>
    <ul
        class="nav d-flex flex-md-column justify-content-center align-items-center gap-2 position-absolute p-2 ps-sm-1 bg-transparent custom-nav">
        <li v-for="(item, index) in mainNavItems" :key="index" class="nav-item position-relative bg-transparent">
            <button @click="changeView(item.name)"
                class="nav-link text-white shadow-sm d-flex justify-center align-items-center g-2 p-0 font-title position-relative"
                :class="{ 'active-item': activeNav === item.name }">
                <span class="p-1 rounded icon"><i :class="item.icon" class="fs-3"></i></span>
                <span
                    class="bg-black bg-opacity-50  p-1 rounded text-uppercase fw-bold ms-2 text position-absolute start-100">{{
                        item.name }}</span></button>
        </li>
    </ul>
</template>

<script setup>

import { useNavStore } from '@/stores/nav'

const emit = defineEmits(['changeView'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    activeNav: String
})



const { mainNavItems } = useNavStore()

const changeView = (view) => {
    const active = view

    emit('changeView', active)
};


</script>

<style scoped>
.custom-nav {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
}

ul {
    z-index: 1000;
}

.text {
    display: none;
    transition: all 1s ease;
}

.icon {
    color: #ced4da;
    transition: color 1s ease;
}

.icon:hover {
    color: #fff;
}


button.active-item .icon {
    color: var(--main);
}



@media screen and (min-width: 768px) {

    /*button.active-item .text {
    display: inline;
} */
    .custom-nav {
        width: fit-content;
        position: fixed !important;
        left: 0;
        transform: translateX(0);
        top: 50%;
        transform: translateY(-50%);
    }

    button:hover .text {
        display: inline;
    }
}
</style>