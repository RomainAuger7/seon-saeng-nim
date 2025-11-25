<script setup>
import ContactForm from '@/components/ContactForm.vue'
import { ref } from 'vue'
</script>

<template>
  <div class="container">
    <ContactForm />
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
</style>
