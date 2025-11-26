<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
  name: '',
  email: '',
  message: '',
  level: 'unknown',
})

const success = ref(false)
const error = ref(false)

const handleSubmit = () => {
  const formData = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message,
    level: form.value.level,
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
      <h2>{{ $t('contact.title') }}</h2>
      <div class="form-name">
        <label for="name">{{ $t('contact.name') }}</label>
        <input
          type="text"
          name="name"
          :placeholder="$t('contact.name_placeholder')"
          v-model="form.name"
          required
        />
      </div>
      <div class="form-email">
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
      </div>
      <div class="form-message">
        <label for="message">{{ $t('contact.message') }}</label>
        <textarea name="message" rows="6" style="resize: none" v-model="form.message" required />
      </div>
      <div class="form-radio">
        <fieldset>
          <legend>{{ $t('contact.level') }}</legend>
          <div class="radio-buttons">
            <div>
              <input
                id="unknown"
                type="radio"
                name="level"
                value="unknown"
                v-model="form.level"
                checked
              />
              <label for="unknown">{{ $t('contact.unknown') }}</label>
            </div>

            <div class="tooltip" title="Beginner">
              <input id="A1" type="radio" name="level" value="A1" v-model="form.level" />
              <label for="A1">A1</label>
            </div>

            <div class="tooltip" title="Debutant">
              <input id="A2" type="radio" name="level" value="A2" v-model="form.level" />
              <label for="A2">A2</label>
            </div>

            <div title="Intermediate" class="tooltip">
              <input id="B1" type="radio" name="level" value="B1" v-model="form.level" />
              <label for="B1">B1/B2</label>
            </div>
            <div title="Advanced" class="tooltip">
              <input id="C1 " type="radio" name="level" value="C1" v-model="form.level" />
              <label for="C1">C1/C2</label>
            </div>
          </div>
        </fieldset>
      </div>
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

.form-radio {
  appearance: none;
  font-size: 1.2rem;
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
.radio-buttons {
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-between;
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
.tooltip {
  display: inline;
  position: relative;
}
.tooltip:hover:after {
  background: #333;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  bottom: 26px;
  color: #fff;
  content: attr(title);
  left: 20%;
  padding: 5px 15px;
  position: absolute;
  z-index: 98;
  width: 220px;
}
.tooltip:hover:before {
  border: solid;
  border-color: #333 transparent;
  border-width: 6px 6px 0 6px;
  bottom: 20px;
  content: '';
  left: 50%;
  position: absolute;
  z-index: 99;
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
</style>
