<script setup>
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
  <div class="container">
    <h1>{{ $t('contact.title') }}</h1>
    <p>{{ $t('contact.content') }}</p>
    <Transition name="fade-in" appear>
      <ContactForm />
    </Transition>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  height: auto;
  gap: 1rem;
}
.container h1 {
  font-size: 2rem;
}
.container p {
  font-size: 1.5rem;
  padding: 0 1rem;
}
.fade-in-enter-active,
.fade-enter-active {
  animation: fade-in 1s ease-out 0s 1 normal none;
}
.bounce-enter-active {
  animation: bounce 1.5s ease-out 0s 1 normal none;
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bounce {
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: translateX(-250px);
    z-index: -10;
  }

  70% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateX(0);
    z-index: -10;
  }

  85% {
    animation-timing-function: ease-in;
    transform: translateX(-32px);
    z-index: -10;
  }
  100% {
    animation-timing-function: ease-out;
    transform: translateX(0);
    z-index: -10;
  }
}
@media screen and (max-width: 1160px) {
  .container {
    height: auto;
    flex-direction: column;
  }
  .container h1 {
    font-size: 1.6rem;
  }
  .container p {
    font-size: 1.3rem;
  }
  .info li {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 769px) {
  .container {
    width: 100%;
    margin-top: 1rem;
  }
  .container h1 {
    font-size: 1.4rem;
  }
  .container p {
    font-size: 1.2rem;
  }
  .info li {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 450px) {
    .container h1 {
      font-size: 1.6rem;
    }
    .container p {
      font-size: 1.2rem;
    }
    .info li {
      font-size: 1.2rem;
    }
  }
}
</style>
