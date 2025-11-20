<script setup>
import LanguageSelector from '@/components/LanguageSelector.vue'
import { ref } from 'vue'

const isOpen = ref(false)
const toggleSidebar = () => {
  isOpen.value = !isOpen.value
}
const closeSidebar = () => {
  isOpen.value = false
}
</script>

<template>
  <button id="open-sidebar-button" @click="toggleSidebar" aria-label="open sidebar">
    <img src="/img/menu.png" alt="menu" height="40px" width="40px" />
  </button>
  <nav class="header-nav" :style="{ right: isOpen ? '0' : '-100%' }">
    <ul>
      <li>
        <button id="close-sidebar-button" @click="toggleSidebar" aria-label="close sidebar">
          <img src="/img/close.png" alt="close" height="40px" width="40px" />
        </button>
      </li>
      <li class="logo-li">
        <img src="/img/flower.png" alt="flower" width="48" height="48" />
        <img src="/img/soju.png" alt="soju" width="48" height="48" />
        <img src="/img/south-korea.png" alt="south-korea" width="48" height="48" />
      </li>
      <li>
        <RouterLink :to="{ name: 'HomePage' }" @click="closeSidebar">
          {{ $t('menu.home') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'AboutPage' }" @click="closeSidebar">
          {{ $t('menu.about') }}</RouterLink
        >
      </li>
      <li>
        <RouterLink :to="{ name: 'ContactPage' }" @click="closeSidebar">
          {{ $t('menu.contact') }}
        </RouterLink>
      </li>
      <li class="selector-li"><LanguageSelector /></li>
    </ul>
  </nav>
  <div id="overlay" v-show="isOpen" @click="toggleSidebar" aria-hidden="true"></div>
</template>

<style scoped>
.header-nav {
  height: 96px;
  background: var(--primary);
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
}
.header-nav ul {
  display: flex;
  list-style: none;
  align-items: center;
}
.logo-li {
  display: flex;
  margin-right: auto;
  padding-left: 1em;
  gap: 1.2em;
}
.header-nav li {
  display: flex;
}
.header-nav a {
  display: flex;
  text-decoration: none;
  color: var(--button);
  padding: 1em 1em;
  font-size: 1.7em;
  font-weight: bold;
  border-radius: 5px;
}
.header-nav a:hover {
  background: linear-gradient(0deg, rgba(255, 182, 109, 1) 0%, rgb(231, 154, 76) 100%);
  color: #482c3a;
  transform: translateY(-2px);
}
.selector-li {
  display: flex;
  padding: 0.5em 1em;
}

#open-sidebar-button {
  display: none;
  background: none;
  border: none;
  padding: 1em;
  margin-left: auto;
  cursor: pointer;
}

#close-sidebar-button {
  display: none;
  background: none;
  border: none;
  padding: 1em;
  cursor: pointer;
}
#overlay {
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  inset: 0;
  z-index: 9;
}

@media screen and (max-width: 764px) {
  #open-sidebar-button,
  #close-sidebar-button {
    display: block;
  }
  .header-nav {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: min(15em, 100%);
    z-index: 10;
    border-left: 1px solid black;
    transition: right 0.3s ease-out;
  }
  .header-nav ul {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .header-nav a {
    width: 100%;
    padding-left: 1em;
  }
  .logo-li {
    padding-top: 1em;
    padding-bottom: 1em;
    margin-right: unset;
  }
  .selector-li {
    margin-left: 9em;
  }
}
</style>
