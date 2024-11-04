<template>
    <li class="nav-item col m-0 p-0">
        <div class="card h-100 bg-white bg-opacity-50 text-white p-2 rounded border-0 shadow-sm w-100">
            <img :src="`images/${props.navItem.name}.svg`" class="card-img h-100 rounded" alt="poster">
            <button class="btn w-100 h-100 card-img-overlay text-white font-title fs-4 text-capitalize fw-semibold"
                @click="$emit('changeView', props.navItem.name)">
                {{ props.navItem.name }}
            </button>
        </div>
    </li>
</template>


<script setup>


const props = defineProps({
    navItem: Object
})

// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['changeView'])


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
    padding: 0 !important;
}

.card:hover button {
    background: rgba(0, 0, 0, 0.863);
    color: var(--main) !important;
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