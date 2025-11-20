<script setup></script>

<template>
  <div class="container">
    <div class="container-left">
      <Transition name="slide-right" appear>
        <div class="header-left">
          <img src="/img/yejin.jpg" alt="flower" height="300" width="300" />
          <h1>{{ $t('home.title') }}</h1>
          <span>{{ $t('home.subtitle') }}</span>
        </div>
      </Transition>
      <Transition name="slide-left" appear>
        <p>{{ $t('home.content') }}</p>
      </Transition>
      <Transition name="fade" appear>
        <div class="buttons">
          <RouterLink :to="{ name: 'AboutPage' }">
            <button>{{ $t('menu.about') }}</button>
          </RouterLink>

          <RouterLink :to="{ name: 'ContactPage' }">
            <button>{{ $t('menu.contact') }}</button>
          </RouterLink>
        </div>
      </Transition>
    </div>
    <div class="container-right">
      <img src="/img/hangeul.png" alt="hangeul" height="500" width="500" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 10rem 5rem;
}
.container-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.header-left {
  display: inline-block;
  background: var(--secondary);
  border-radius: 15px;
}
.header-left img {
  float: left;
  padding: 1rem;
  border-radius: 10%;
}
.header-left h1 {
  padding-top: 2rem;
  font-size: 4rem;
  font-weight: bold;
}
.header-left span {
  font-size: 2rem;
  margin-top: -2rem;
}
.container-left p {
  font-size: 1.4rem;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;
  gap: 2em;
}
.buttons button {
  height: 3.8rem;
  width: 9rem;
  font-size: 1.6rem;
  border: none;
  border-radius: 15px;
  background: var(--button);
  opacity: 1;
  cursor: pointer;
  color: var(--button-secondary);
  transition: 0.3s;
}
.buttons button:hover {
  color: #fff;
  transform: translateY(-5px);
}
.container-right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(200px);
}

.slide-right-enter-to {
  transition: all 1s 0.2s ease-out;
  transform: translateX(0);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}

.slide-left-enter-to {
  transition: all 1s 0.2s ease-out;
  transform: translateX(0);
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity 1s 1.2s ease-out;
  opacity: 1;
}
</style>
