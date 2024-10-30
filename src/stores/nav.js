import { ref } from "vue";
import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", () => {
  const mainNavItems = ref([
    { name: "home", icon: "bi-house" },
    { name: "about", icon: "bi-person" },
    { name: "works", icon: "bi-briefcase" },
    { name: "blog", icon: "bi-pencil-square" },
    { name: "contact", icon: "bi-chat-left-text" },
  ]);

  const navCards = ref([
    { name: "about" },
    { name: "works" },
    { name: "blog" },
    { name: "contact" },
  ]);
  return { mainNavItems, navCards };
});
