<template>
    <li class="nav-item col m-0 p-0">
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
// eslint-disable-next-line no-unused-vars
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
    /* Adjust scale for sphere size */
    opacity: 0.1;
    /* Adjust for desired transparency */
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