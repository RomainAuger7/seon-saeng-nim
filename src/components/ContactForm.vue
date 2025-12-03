<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)
const error = ref(false)

const handleSubmit = () => {
  const formData = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message,
  }

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(
      () => {
        setTimeout(() => {
          success.value = true
          form.value.name = ''
          form.value.email = ''
          form.value.message = ''
        }, 500)
      },
      (error) => {
        setTimeout(() => {
          error.value = true
          console.log(error)
        }, 500)
      },
    )
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-container">
      <label for="name">{{ $t('contact.name') }}</label>
      <input
        type="text"
        name="name"
        :placeholder="$t('contact.name_placeholder')"
        v-model="form.name"
        required
      />
      <label for="email">{{ $t('contact.email') }}</label>
      <input
        type="email"
        name="email"
        :placeholder="
          $t('contact.email_placeholder', { account: 'youremail', domain: 'example.com' })
        "
        v-model="form.email"
        required
      />
      <label for="message">{{ $t('contact.message') }}</label>
      <textarea name="message" rows="6" style="resize: none" v-model="form.message" required />

      <button type="submit" class="form-button">{{ $t('contact.validation') }}</button>
      <Transition name="slide-fade">
        <div @click="success = false" v-if="success" class="form-success">
          {{ $t('contact.success') }}
        </div>
      </Transition>
      <Transition name="slide-fade">
        <div @click="error = false" v-if="error" class="form-error">{{ $t('contact.error') }}</div>
      </Transition>
    </div>
  </form>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 50px;
  width: 33vw;
  height: auto;
  gap: 1rem;
  background-color: white;

  border: 2px solid #1b1b1b;
  box-sizing: border-box;
  box-shadow: 6px 6px 0 #1b1b1b;
  border-radius: 8px;
}
.form-container input,
.form-container textarea {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 10px;
  padding: 16px 24px;
  width: 90%;
  height: 15%;
  left: 1048px;
  top: 16px;
  background: #ffffff;
  border: 2px solid #1b1b1b;
  box-sizing: border-box;
  border-radius: 16px;
  transition: 0.2s;
}
.form-container input {
  width: 50%;
}
.form-container input:focus,
.form-container textarea {
  width: 100%;
}
.form-container input:focus,
.form-container textarea:focus {
  outline: none;
  background: #f9e450;
  border: 3px solid #1b1b1b;
  border-radius: 16px;
}
.form-container label {
  margin-top: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 0.8;
}

.form-button {
  margin: auto;
  border-radius: 15px;
  padding: 0.5rem;
  width: 40%;
  background: #f9e450;
}
.form-button:hover {
  background: #ffbb38;
}

.form-radio div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.form-radio fieldset {
  border: 3px solid black;
}
.form-radio legend {
  font-size: 1.2rem;
}
.form-success {
  width: 80%;
  margin: auto;
  border-radius: 5px;
  background: greenyellow;
  color: black;
  border: 4px solid black;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
}
.form-error {
  width: 80%;
  margin: auto;
  border-radius: 5px;
  background: rgb(255, 76, 76);
  color: black;
  border: 4px solid black;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
@media screen and (max-width: 1160px) {
  .form-container {
    width: 80vw;
    height: 50dvh;
  }
}
@media screen and (max-width: 450px) {
  .form-container {
    width: 80vw;
    height: auto;
  }
  .form-button {
    width: 50%;
  }
}
</style>
