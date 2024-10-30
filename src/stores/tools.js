import { ref } from "vue";
import { defineStore } from "pinia";

export const useToolsStore = defineStore("tools", () => {
  const tools = ref([
    { name: "HTML", logo: "html" },
    { name: "CSS", logo: "css" },
    { name: "JavaScript", logo: "javascript" },
    { name: "Typescript", logo: "typescript" },
    { name: "Vue", logo: "vue" },
    { name: "React", logo: "react" },
    { name: "Nextjs", logo: "nextjs" },
    { name: "Nodejs", logo: "nodejs" },
    { name: "Tailwindcss", logo: "tailwind" },
    { name: "Bootstrap", logo: "bootstrap" },
    { name: "jQuery", logo: "jquery" },
    { name: "Python", logo: "python" },
    { name: "C++", logo: "cpp" },
    { name: "Figma", logo: "figma" },
    { name: "Corel Draw", logo: "corel-draw" },
  ]);

  return { tools };
});
