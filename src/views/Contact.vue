<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Wrapper :activeView="view === 'contact'">
    <div class="min-vh-100 py-5 px-3 px-sm-5 row justify-content-between w-100 m-0">
      <div class="mb-5 p-0 col-lg-4">
        <iframe class="rounded-circle"
          src="https://lottie.host/embed/a0d40bba-0117-4363-9061-e40297bb8259/lcoBmjFglc.json"></iframe>
        <h1 class="fs-1 fw-bold title mb-2 mt-4">Contact Me</h1>
        <p class="m-0">
          I’m always open to new opportunities and collaborations, especially where tech meets the maritime industry.
          If you're interested in working together or have a project in mind, don’t hesitate to reach out. Let’s create
          something amazing!
        </p>
      </div>
      <div class="p-0 col-lg-7">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required class="input-style" aria-label="Your Name">
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required aria-label="Your Email">
          </div>

          <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" v-model="formData.subject" required aria-label="Subject of Your Message">
          </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" rows="4" v-model="formData.message" required aria-label="Your Message"></textarea>
          </div>

          <div class="d-flex justify-content-end submit-btn-wrapper">
            <Button label="Submit" type="submit" aria-label="Submit Form" />
          </div>
        </form>
      </div>
    </div>
  </Wrapper>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Wrapper from '@/components/Wrapper.vue';
import Button from '@/components/Button.vue';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  view: String
});

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});


const submitForm = () => {
  const { name, email, subject, message } = formData.value;
  console.log(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, import.meta.env.VITE_USER_ID);

  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        subject,
        message,
      },
      import.meta.env.VITE_USER_ID
    )
    .then(
      () => {
        console.log('Message sent successfully!');
        alert('Message sent successfully!');
        formData.value = { name: '', email: '', subject: '', message: '' };
      },
      (error) => {
        console.error('Failed to send message:', error);
        alert('There was an error sending your message. Please try again.');
      }
    );
};

onMounted(() => {
  // ScrollTrigger setup for form groups
  const formGroups = document.querySelectorAll('.form-group');

  formGroups.forEach((formGroup, index) => {
    gsap.from(formGroup, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2, // Staggered animation for each form group
      ease: 'power3.out',
      scrollTrigger: {
        trigger: formGroup,
        start: 'top 80%', // Trigger animation when form group is 80% from the top of the viewport
        toggleActions: 'play none none reset',
      },
    });
  });


});
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: var(--input-color, #ced4da);
  border: none;
  border-bottom: 1px solid var(--input-border, #495057);
  border-radius: 5px;
  background-color: var(--input-background, #00000023);
  margin-top: 5px;
  transition: all 1s ease;
}

input:hover,
textarea:hover {
  border-bottom: 1px solid var(--main);
}

input:focus,
textarea:focus {
  background-color: rgba(0, 0, 0, 0.308);
}


.title {
  color: var(--main);
}

iframe {
  background-color: rgba(255, 255, 255, 0.041);
}
</style>
