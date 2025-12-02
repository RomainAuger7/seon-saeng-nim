<script setup></script>

<template>
  <div class="container">
    <Transition name="fade" appear>
      <div class="top-container">
        <h1>Hong Yejin professeur de coréen</h1>
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
  height: 100%;
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
  gap: 1rem;
}
.top-container h1 {
  font-size: 2.3rem;
}
.top-container span {
  font-size: 1.7rem;
}
.top-container p {
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
  justify-content: center;
}
.skill-card,
.xp-card {
  display: inline-block;
  border-radius: 15px;
  width: 90%;
  height: 75%;
  padding: 2rem;
  border: 1px solid black;
  box-shadow: 8px 8px 0 black;
  border-radius: 12px;
}
.skill-card ul,
.xp-card ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: korean-hanja-informal;
  padding: 0.5rem;
}

.skill-card {
  background: var(--secondary);
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
.xp-card {
  background: var(--button-secondary);
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity 1s ease-out;
  opacity: 1;
}
.slide-up-enter-from {
  transform: translateY(600px);
}

.slide-up-enter-to {
  transition: all 1s ease-out;
  transform: translateY(0);
}
</style>
