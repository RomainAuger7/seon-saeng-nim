<script setup></script>

<template>
  <div class="container">
    <Transition name="fade" appear>
      <div class="top-container">
        <div class="top-header">
          <img src="/img/yejin_alt.jpg" alt="yejin" width="150" height="150" />
          <h1>Hong Yejin, professeur de coréen</h1>
        </div>
        <span>Master de l'université des langues étrangères de Seoul</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse et excepturi expedita
          explicabo facere laudantium magni neque perferendis ullam? Dolor earum, eum fuga magni
          neque quibusdam? Maxime praesentium, tempora.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ab esse et excepturi expedita explicabo facere laudantium magni neque
          perferendis ullam? Dolor earum, eum fuga magni neque quibusdam? Maxime praesentium,
          tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab esse et excepturi
          expedita explicabo facere laudantium magni neque perferendis ullam? Dolor earum, eum fuga
          magni neque quibusdam? Maxime praesentium, tempora.
        </p>
      </div>
    </Transition>

    <div class="bottom-container">
      <div class="skill-container">
        <Transition name="slide-up" appear>
          <div class="skill-card">
            <h1>Compétences</h1>
            <ul>
              <li>Jolie</li>
              <li>Mignonne</li>
              <li>Sexy</li>
              <li>Idiote</li>
            </ul>
          </div>
        </Transition>
      </div>
      <div class="xp-container">
        <Transition name="slide-up" appear>
          <div class="xp-card">
            <h1>Expériences</h1>
            <ul>
              <li>(2022 - 2025) My korean studio</li>
              <li>(2025 - 2026) Ecole de coréen de Clermont-Ferrand</li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 2rem;
}
.top-container {
  flex: 1;
  min-height: 50%;
  max-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  gap: 2rem;
}
.top-header {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 0;
  gap: 2rem;
}
.top-header img {
  border-radius: 50%;
}
.top-header h1 {
  text-align: center;
  font-size: 2.3rem;
}
.top-container span {
  text-align: start;
  font-size: 1.7rem;
}
.top-container p {
  text-align: justify;
  font-size: 1.2rem;
}
.bottom-container {
  flex: 1;
  display: flex;
}
.skill-container,
.xp-container {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  justify-content: center;
}
.skill-card,
.xp-card {
  border-radius: 15px;
  width: 90%;
  height: 100%;
  padding: 0 2rem;
  border: 1px solid black;
  border-radius: 12px;
}
.skill-card {
  background: var(--button);
  color: var(--primary);
  box-shadow: 8px 8px 0 var(--primary);
}
.xp-card {
  box-shadow: 8px 8px 0 var(--secondary);
  color: var(--secondary);
  background: var(--button);
}
.skill-card ul,
.xp-card ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: korean-hanja-informal;
  padding: 0.5rem;
}

.skill-card h1,
.xp-card h1 {
  font-size: 1.8rem;
  text-align: center;
  padding-bottom: 1rem;
}
.skill-card li,
.xp-card li {
  font-size: 1.2rem;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity 1s ease-out;
  opacity: 1;
}
.slide-up-enter-active {
  animation: scaling 1s ease-out 0s 1 normal none;
}

@keyframes scaling {
  0% {
    transform: translateY(400px);
  }

  100% {
    transform: translateY(0);
  }
}
@media screen and (max-width: 1000px) {
  .container {
    height: auto;
  }
  .top-container {
    padding: 0 2rem;
  }
  .top-container h1 {
    font-size: 1.8rem;
  }
  .top-container span {
    font-size: 1.3rem;
  }
  .top-container p {
    font-size: 1rem;
  }
  .bottom-container {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0.5rem;
  }
  .skill-card,
  .xp-card {
    height: auto;
    min-height: 180px;
    width: 75%;
    padding: 0 2rem;
  }
  .skill-card h1,
  .xp-card h1 {
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
  }
  .skill-card li,
  .xp-card li {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 769px) {
  .top-header {
    flex-direction: column;
  }
}
</style>
