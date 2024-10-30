<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button :type="type" class="btn btn-main fw-bold fs-5 p-0 d-flex align-items-center justify-content-center"
        role="button"><span class="py-2 ps-4 pe-2">{{ label }}</span> <span class="btn-icon py-2 px-4 fs-4 fw-bolder"><i
                class="bi bi-arrow-right"></i></span></button>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },

    label: {
        type: String,
        required: true
    }
})
</script>


<style scoped>
.btn-main {
    background-color: var(--main);
    color: var(--bg-body);
    border: 3px solid var(--main) !important;
}

.btn-icon {
    background-color: var(--main);
    border-bottom-left-radius: 100%;
    color: var(--bg-body)
}

.btn-main:hover .btn-icon {
    background-color: var(--bg-body);
    color: var(--main);
}
</style>