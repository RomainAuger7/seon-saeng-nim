<script setup>
  import { useI18n } from 'vue-i18n'

  const { locale } = useI18n()
  const lang = locale

  function changeLang() {
    locale.value = lang.value
  }

</script>

<template>
  <div class="lang-selector">
    <select v-model="lang" @change="changeLang">
      <option value="fr">FR</option>
      <option value="en">EN</option>
      <option value="kr">KR</option>
    </select>
  </div>
</template>

<style scoped>

.lang-selector select{
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
}
</style>



