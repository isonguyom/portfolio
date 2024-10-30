import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfilesStore = defineStore("profiles", () => {
  const profileLinks = ref([
    { name: "Github", icon: "bi-github", link: "github.com/isonguyom" },
    {
      name: "LinkedIn",
      icon: "bi-linkedin",
      link: "linkedin.com/in/martin-isonguyo/",
    },
    { name: "X", icon: "bi-twitter-x", link: "x.com/IsonguyoM" },
    { name: "Behance", icon: "bi-behance", link: "behance.net/martinisonguyo" },
  ]);

  return { profileLinks };
});
