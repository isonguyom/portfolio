<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <button ref="button" :type="type" :aria-label="ariaLabel"
        class="btn btn-main fw-bold fs-5 p-0 d-flex text-capitalize align-items-center justify-content-center"
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
    },

    ariaLabel: {
        type: String,
        default: "Button"
    }
})

</script>


<style scoped>
.btn-main {
    background: linear-gradient(45deg, #3aafa9 0%, #30928d 100%);
    color: var(--bg-body);
    transition: all 0.5s ease;
}

.btn-icon {
    transition: all 0.5s ease;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.02);
    }

    100% {
        transform: scale(1);
    }
}

.btn-main:hover {
    background: linear-gradient(45deg, #30928d 0%, #3aafa9 100%);
    box-shadow: 0px 4px 12px #3aafa9;
    animation: pulse 1s infinite;
}

.btn-main:hover .btn-icon {
    transform: translateX(5px);
}
</style>