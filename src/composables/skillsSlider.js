import { ref } from "vue";

import { useSkillsStore } from "@/stores/skills";

export default function useSkillSlider() {
  const { skills } = useSkillsStore();

  const currentIndex = ref(0);
  const carouselInterval = ref(null);
  const isHovered = ref(false);

  const skillsWithDuplicates = ref([...skills, ...skills]);

  const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % skills.length;
  };

  const startCarousel = () => {
    carouselInterval.value = setInterval(() => {
      nextTestimonial();
    }, 2000); // Change the interval as needed
  };

  const pauseCarousel = () => {
    isHovered.value = true;
    clearInterval(carouselInterval.value);
  };

  const resumeCarousel = () => {
    isHovered.value = false;
    startCarousel();
  };

  return {
    skillsWithDuplicates,
    currentIndex,
    carouselInterval,
    startCarousel,
    pauseCarousel,
    resumeCarousel,
  };
}
