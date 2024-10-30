<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Wrapper :activeView="view === 'about'">
    <div class="min-vh-100 pb-5 pt-lg-5 px-3 px-sm-5 position-relative w-100 about-wrapper">
      <div class="row justify-content-lg-between row-cols-1 row-cols-lg-2 g-4 mb-5">
        <div class="col mt-lg-0">
          <h6 class="text-capitalize mb-3 section-caption">About me</h6>
          <div class="card w-100 border-0 bg-transparent">
            <div class="w-100">
              <div class="fs-5">
                <h4 class="text-white">Hey, I'm Martin Isonguyo, a web developer and maritime-tech enthusiast.</h4>
                <p>
                  Over the years as a freelance web developer, I've honed my skills in building innovative frontend
                  solutions, primarily using Vue.js. My experience spans a variety of projects that have helped improve
                  my technical expertise and expand my understanding of user-friendly design.
                </p>
                <p>
                  With a background in marine engineering, I am passionate about building, contributing, and providing
                  impactful solutions to real-world problems in the maritime industry.
                </p>
                <p>
                  Thanks for stopping by my page! Let's connect and collaborate to create amazing experiences together.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col skills-wrapper ps-lg-4">
          <h6 class="text-capitalize mb-3 section-caption">knowledge Areas</h6>
          <SkillsSlider />
        </div>

      </div>
      <div class="tools-wrapper w-100 px-lg-5">
        <h6 class="text-capitalize mb-3 section-caption">Tools/Tech</h6>
        <ToolsCarousel />
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue';
import SkillsSlider from '@/components/SkillsSlider.vue';
import ToolsCarousel from '@/components/ToolsCarousel.vue';


// eslint-disable-next-line no-unused-vars
const props = defineProps({
  view: String
})


</script>

<style scoped>
.about-wrapper {
  padding-top: 70px;
}

.skills-wrapper {
  margin-top: 30px;
}

.tools-wrapper {
  margin-top: 60px;
}

@media screen and (min-width: 1024px) {
  .about-wrapper {
    padding-top: 0;
    overflow: hidden;
  }

  .skills-wrapper {
    margin-top: 0;
  }

  .tools-wrapper {
    margin-top: 0;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 10px;
  }
}
</style>