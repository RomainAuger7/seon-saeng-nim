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
.lang-selector select {
  padding: 8px 12px;
  border-radius: 8px;
  background: white;
  border: 1px solid #d1d5db;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  outline: none;
  cursor: pointer;
  transition: 0.2s ease;
}

.lang-selector select:hover {
  border-color: #9ca3af;
}

.lang-selector select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}
</style>



