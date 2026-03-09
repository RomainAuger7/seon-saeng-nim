<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="container">
    <h1>{{ $t('contact.title') }}</h1>
    <Transition name="fade-in" appear>
      <ContactForm />
    </Transition>
    <div class="info">
      <ul>
        <li>{{ $t('contact.info1') }}</li>
        <li>{{ $t('contact.info2') }}</li>
        <li>{{ $t('contact.info3') }}</li>
        <li>{{ $t('contact.info4') }}</li>
        <li>{{ $t('contact.info5') }}</li>
        <li>{{ $t('contact.info6') }}</li>
        <li>{{ $t('contact.info7') }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  height: auto;
  gap: 2rem;
}
.form-container {
  margin-top: 3rem;
}
.img-container img {
  z-index: -3;
}
.container h1 {
  font-size: 2rem;
}
.info {
  padding: 1rem 2.5rem;
}
.info li {
  font-size: 1.5rem;
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
    font-size: 1.8rem;
  }
  .info li {
    font-size: 1.3rem;
  }
  .img-container img {
    height: 240px;
    width: 240px;
  }
}
@media screen and (max-width: 769px) {
  .container {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 450px) {
    .container h1 {
      font-size: 1.6rem;
    }
    .info li {
      font-size: 1.2rem;
    }
  }
}
</style>
