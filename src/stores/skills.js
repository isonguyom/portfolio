import { ref } from "vue";
import { defineStore } from "pinia";

export const useSkillsStore = defineStore("skills", () => {
  const skills = ref([
    {
      name: "Web Dev",
      poster: "poster",
      description:
        "With a solid foundation in HTML, CSS, and JavaScript, I am capable of building user-friendly interfaces that deliver exceptional user experiences. I pride myself on applying best coding practices to ensure I deliver quality results in my projects.",
    },
    {
      name: "design",
      poster: "poster",
      description:
        "A good design should be able to effectively communicate in its simplest and cleanest form. If well executed, a good design should not just be seen but should equally be felt. I may not be your regular GUI designer, but yeah! I can do a job.",
    },
    {
      name: "big data",
      poster: "poster",
      description:
        "Data has grown in size and complexity over the years; these data are even larger in the maritime industry. With the knowledge of big data, I am able to make sense of large and complex data to help create data-driven solutions.",
    },
    {
      name: "Maritime",
      poster: "poster",
      description:
        "My academic background in marine engineering, coupled with my tech skills, has fuelled an enthusiasm for providing technical solutions to challenges in the maritime industry. Embarking on a maritime-tech project? I am glad to be on the team.",
    },
  ]);

  return { skills };
});
