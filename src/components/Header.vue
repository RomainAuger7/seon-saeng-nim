<script setup>
import LanguageSelector from "@/components/LanguageSelector.vue";
</script>

<template>
  <header class="header">
      <nav class="header-nav">
        <RouterLink :to="{ name: 'HomePage' }">{{$t('menu.home')}}</RouterLink>
        <RouterLink :to="{ name: 'AboutPage' }">{{$t('menu.about')}}</RouterLink>
        <RouterLink :to="{ name: 'ContactPage' }">{{$t('menu.contact')}}</RouterLink>
      </nav>
      <LanguageSelector/>
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    height: 96px;
    background: var(--primary);
    color: black;
  }
  .header-nav {
    display: flex;
    gap: 2rem;
  }
  .header a{
    font-weight: bold;
    font-size: 36px;
    text-decoration: none;
    color: inherit;
  }
</style>
