<script setup></script>

<template>
  <div class="container">
    <div class="container-left">
      <Transition name="slide-right" appear>
        <div class="header-left">
          <img src="/img/yejin.jpg" alt="flower" height="250" width="250" />
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
    <Transition name="fade" appear>
      <div class="container-right">
        <img src="/img/hangeul.png" alt="hangeul" height="450" width="450" />
      </div>
    </Transition>
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
  padding-top: 0.5rem;
  font-size: 3.5rem;
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
@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .container {
    gap: 1.5rem;
    padding: 7rem 3rem;
  }
  .header-left {
    border-radius: 15px;
  }
  .header-left img {
    height: 250px;
    width: 250px;
    padding: 1rem;
  }
  .header-left h1 {
    padding-top: 1rem;
    font-size: 3rem;
    font-weight: bold;
  }
  .header-left span {
    font-size: 1.5rem;
  }
  .container-left p {
    font-size: 1.3rem;
  }
  .buttons {
    padding: 0 1.8rem;
    gap: 1.8em;
  }
  .buttons button {
    height: 3.2rem;
    width: 7.8rem;
    font-size: 1.5rem;
  }
  .container-right img {
    width: 300px;
    height: 300px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    gap: 3rem;
    padding: 7rem 3.5rem;
    flex-direction: column;
  }
  .header-left {
    border-radius: 15px;
  }
  .header-left img {
    height: 200px;
    width: 200px;
  }
  .header-left h1 {
    padding-top: 1.2rem;
    font-size: 3rem;
    font-weight: bold;
  }
  .header-left span {
    font-size: 1.7rem;
  }
  .container-left p {
    font-size: 1.3rem;
  }
  .buttons {
    padding: 0 1.7rem;
    gap: 1.7em;
  }
  .buttons button {
    height: 3.1rem;
    width: 7.3rem;
    font-size: 1.5rem;
  }
  .container-right img {
    width: 250px;
    height: 250px;
  }
}
@media screen and (min-width: 500px) and (max-width: 768px) {
  .container {
    gap: 3rem;
    padding: 6rem 3.5rem;
    flex-direction: column;
  }
  .header-left {
    border-radius: 15px;
  }
  .header-left img {
    height: 200px;
    width: 200px;
  }
  .header-left h1 {
    padding-top: 1.2rem;
    font-size: 2.5rem;
    font-weight: bold;
  }
  .header-left span {
    font-size: 1.5rem;
  }
  .container-left p {
    font-size: 1.2rem;
  }
  .buttons {
    padding: 0 1.7rem;
    gap: 1.7em;
  }
  .buttons button {
    height: 3.1rem;
    width: 7.3rem;
    font-size: 1.5rem;
  }
  .container-right img {
    width: 200px;
    height: 200px;
  }
}
@media screen and (max-width: 500px) {
  .container {
    gap: 3rem;
    padding: 4rem 3rem;
    flex-direction: column;
  }
  .header-left {
    padding: 1em;
    gap: 2rem;
    border-radius: 15px;
  }
  .header-left img {
    margin-left: 0.3rem;
    height: 250px;
    width: 250px;
  }
  .header-left h1 {
    font-size: 2.4rem;
    font-weight: bold;
  }
  .header-left span {
    font-size: 1.4rem;
  }
  .container-left p {
    font-size: 1.1rem;
  }
  .buttons {
    justify-content: center;
    padding: 0 1.5rem;
    gap: 1.5em;
  }
  .buttons button {
    height: 3rem;
    width: 6.8rem;
    font-size: 1.5rem;
  }
  .container-right img {
    width: 200px;
    height: 200px;
  }
}
</style>
