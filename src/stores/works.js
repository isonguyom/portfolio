import { ref } from "vue";
import { defineStore } from "pinia";

export const useWorksStore = defineStore("works", () => {
  const works = ref([
    {
      title: "DCOIN Exchange",
      image: "dcoin",
      link: "https://dcoinexchange.com",
      categories: "web dev",
      tools: "Vue, Tailwind",
      desc: "A reliable platform to transact crypto with confidence. It also offers a seamless experience for buying and selling gift cards.",
    },
    {
      title: "Tiptop Design Agency",
      image: "tiptop",
      link: "https://tiptopdesign.netlify.app",
      categories: "web dev, logo",
      tools: "HTML/CSS, GSAP, Inkscape",
      desc: "A design agency that creates wonderful designs and strategies to grow businesses. Excellence is what motivates them into accomplishing wonderful projects.",
    },
    {
      title: "React Image gallery",
      image: "gallery",
      link: "https://isonguyom.github.io/drag-and-drop-gallery",
      categories: "web dev",
      tools: "React, Auth0",
      desc: "React drag and drop gallery, which authenticates users to allow them access the drag and drop feature.",
    },
    {
      title: "World Citizen",
      image: "world-citizen",
      link: "https://worldcitizendotorg.netlify.app",
      categories: "web dev, design, logo",
      tools: "Bootstrap, Figma",
      desc: "World Citizen is a humanitarian organization whose aim is to create a cloth donation platform where anyone can donate clothes.",
    },
    {
      title: "JavaScript Quiz app",
      image: "quiz-app",
      link: "https://isonguyom.github.io/quizAppJs",
      categories: "web dev",
      tools: "JavaScript",
      desc: "A simple JavaScript quiz application",
    },
    {
      title: "Dummy Me",
      image: "dummyme",
      link: "https://isonguyom.github.io/dummyMe",
      categories: "web dev",
      tools: "React",
      desc: "This handy tool helps you create dummy text for all your layout needs.",
    },
    {
      title: "Vue Countdown Timer",
      image: "countdown-timer",
      link: "https://isonguyom.github.io/countdown-timer",
      categories: "web App",
      tools: "Vue",
      desc: "A Simple Vue3 Countdown Timer.",
    },
    {
      title: "Vue Calculator",
      image: "vue-calculator",
      link: "https://iso-vue-calculator.netlify.app/",
      categories: "web App",
      tools: "Vue",
      desc: "A beautiful UI vue calculator",
    },
    {
      title: "Ventus digital Agency",
      image: "vedia",
      link: "https://vedia.netlify.app",
      categories: "web dev",
      tools: "HTML/CSS JavaScript",
      desc: "We are here to give your business the digital feel. Our services include web design and development, branding, digital marketing, social media promotion, digital skills training, and more. ",
    },
  ]);
  return { works };
});
