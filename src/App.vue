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
  --primary: #ffb66d;
  --secondary: #c98686;
  --background: #fff4ec;
  --button: #381d2a;
  --button-secondary: #9f2c64;
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
}

.font-fr,
.font-en {
  font-family: 'Nunito Sans', sans-serif;
}

.font-kr {
  font-family: 'Gowun Dodum', sans-serif;
}
.main {
  height: calc(100dvh - 96px);
  padding: 1rem;
}
</style>
