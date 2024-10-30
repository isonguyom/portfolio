<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Wrapper :activeView="view === 'blog'">
        <div class="min-vh-100 py-5 px-3 px-sm-5 row justify-content-between align-items-center">
            <PostSlider />
        </div>
    </Wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue';
import PostSlider from '@/components/PostSlider.vue';


// eslint-disable-next-line no-unused-vars
const props = defineProps({
    view: String
})

</script>