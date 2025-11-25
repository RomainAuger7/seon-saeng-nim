<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  console.log(form.value)

  emailjs.sendForm('service_ul44o2v', 'template_2boir3a', form.value, 'HjjET-fvszPWBoPKo').then(
    () => {
      alert('Message sent successfully!')
      // form.value.name = ''
      // form.value.email = ''
      // form.value.message = ''
    },
    (error) => {
      console.log(error)
      alert('Failed to send message, please try again', error)
    },
  )
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <h2>Contact me !</h2>
      <div class="form-name">
        <label for="name">Name :</label>
        <input type="text" name="name" placeholder="Name" v-model="form.name" required />
      </div>
      <div class="form-email">
        <label for="email">Email :</label>
        <input
          type="email"
          name="email"
          placeholder="Yourmail@example.com"
          v-model="form.email"
          required
        />
      </div>
      <div class="form-message">
        <label for="message">Your message :</label>
        <textarea name="message" rows="6" style="resize: none" v-model="form.message" required />
      </div>
      <button type="submit" class="form-button">Send message !</button>
    </div>
  </form>
</template>

<style scoped>
.form-container {
  width: 700px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 102, 0, 0.8);
  gap: 2rem;
  padding: 5rem;
  border: 1px solid black;
  box-shadow: 8px 8px 0 black;
  border-radius: 12px;
  font-weight: bold;
}
.form-container h2 {
  color: var(--button);
  font-size: 2.5rem;
  text-align: center;
}
.form-container input,
.form-container textarea {
  padding: 0.5rem;
  border-radius: 5px;
}
.form-container label {
  font-size: 1.2rem;
}
.form-name,
.form-email,
.form-message {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-button {
  margin: auto;
  border-radius: 15px;
  padding: 0.5rem;
  width: 40%;
}
</style>
