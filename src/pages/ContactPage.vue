<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="container">
    <Transition name="fade" appear>
      <ContactForm />
    </Transition>
  </div>
</template>

<style scoped>
.container {
  height: calc(100dvh - 96px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity 1s 0.5s;
  opacity: 1;
}
</style>
