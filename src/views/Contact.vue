<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Wrapper :activeView="view === 'contact'">
    <div
      class="min-vh-100 py-5 px-3 px-sm-5 row row-cols-1 row-cols-lg-2 justify-content-between align-items-center w-100">
      <div class="mb-4 pe-lg-4">
        <h1 class="fs-1 fw-bold title mb-2">Contact Me</h1>
        <p>I’m always open to new opportunities and collaborations, especially where tech meets the maritime industry.
          If you're interested in working together or have a project in mind, don’t hesitate to reach out. Let’s create
          something amazing!</p>
      </div>
      <div>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required class="input-style">
          </div>

          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required>
          </div>

          <div class="form-group">
            <label for="email">Subject:</label>
            <input type="text" id="subject" v-model="formData.subject" required>
          </div>

          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" rows="4" v-model="formData.message" required></textarea>
          </div>

          <div class="d-flex justify-content-end">

            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>

    </div>
  </Wrapper>
</template>

<script setup>
import { ref } from 'vue'
import Wrapper from '@/components/Wrapper.vue';
import Button from '@/components/Button.vue';



// eslint-disable-next-line no-unused-vars
const props = defineProps({
  view: String
})

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  // Here you can implement the logic to submit the form data
  console.log('Form submitted:', formData.value);
  // Reset form fields after submission
  formData.value.name = '';
  formData.value.email = '';
  formData.value.message = '';
};

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
  border: none;
  border-bottom: 1px solid #495057;
  border-radius: 5px;
  background-color: #00000023;
  margin-top: 5px;
  transition: all 1s ease;
}

input:hover,
textarea:hover {
  border-bottom: 1px solid var(--main);
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.title {
  color: var(--main)
}
</style>