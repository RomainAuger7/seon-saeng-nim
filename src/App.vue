<script setup>
import Header from '@/components/Header.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()
const fontClass = computed(() => {
  return {
    'font-fr': locale.value === 'fr',
    'font-en': locale.value === 'en',
    'font-kr': locale.value === 'kr',
  }
})
</script>

<template>
  <div :class="fontClass">
    <Header />
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>

<style>
:root {
  --primary: #ffba08;
  --secondary: #ff6600;
  --background: #fff4ec;
  --button: #141414;
  --button-secondary: #cccbcd;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  line-height: 1.5;
}

body {
  background: var(--background);
  font-family: 'Gowun Dodum', sans-serif;
}
img {
  display: block;
  max-inline-size: 100%;
}
.main {
  height: calc(100dvh - 96px);
}
@media screen and (max-width: 769px) {
  body {
    background: rgb(255, 244, 236);
  }
}
</style>
