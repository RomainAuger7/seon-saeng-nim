<script setup>
import Header from "@/components/Header.vue";
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const {locale} = useI18n();
const fontClass = computed(() => {
  return {
    "font-fr" : locale.value === "fr",
    "font-en" : locale.value === "en",
    "font-kr" : locale.value === "kr",
  }
})

</script>

<template>
  <div :class="fontClass">
    <Header/>
    <RouterView/>
  </div>
</template>

<style>
:root {
  --primary: #F2B880;
  --secondary: #C98686;
  --background: #FFF4EC;
  --button: #381D2A;
  --button-secondary: #9D5176;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1.5;
}

.font-fr,
.font-en {
  font-family: "Nunito Sans", sans-serif;
}

.font-kr {
  font-family: "Gowun Dodum", sans-serif;
}

body{
  background: var(--background);
}
</style>
