<script setup></script>

<template>
  <div class="container">
    <Transition name="fade" appear>
      <div class="top-container">
        <div class="top-header">
          <img src="/img/yejin_alt.jpg" alt="yejin" width="250" height="250" />
        </div>
      </div>
    </Transition>
    <div class="bottom-container">
      <div class="content-container">
        <Transition name="fade" appear>
          <div class="card">
            <ul>
              <li>
                <h1>{{ $t('about.xp') }}</h1>
                <div class="card-content">
                  <ul>
                    <li>{{ $t('about.xp1') }}</li>
                    <li>{{ $t('about.xp2') }}</li>
                    <li>{{ $t('about.xp3') }}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
      <div class="content-container">
        <Transition name="fade" appear>
          <div class="card">
            <ul>
              <li>
                <h1>{{ $t('about.diploma') }}</h1>
                <div class="card-content">
                  <ul>
                    <li>{{ $t('about.diploma1') }}</li>
                    <li>{{ $t('about.diploma2') }}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
      <div class="content-container">
        <Transition name="fade" appear>
          <div class="card">
            <ul>
              <li>
                <h1>{{ $t('about.languages') }}</h1>
                <div class="card-content">
                  <ul>
                    <li>{{ $t('about.language1') }}</li>
                    <li>{{ $t('about.language2') }}</li>
                    <li>{{ $t('about.language3') }}</li>
                  </ul>
                </div>
              </li>
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
  background: #f9e450;
  display: flex;
}
.content-container {
  flex: 1;
  display: flex;
  padding: 1rem;
  justify-content: center;
}
.card {
  border-radius: 15px;
  width: 90%;
  height: 100%;
  padding: 0 2rem;
}
.card ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
}
.card h1 {
  font-size: 1.8rem;
  padding-bottom: 1rem;
}
.card li {
  font-size: 1.2rem;
}
.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.card-content ul li {
  padding: 12px 0;
  color: #222;
  letter-spacing: 0.01em;
}
.card-content ul li::before {
  content: '-';
  font-size: 1.8rem;
  margin-right: 12px;
  color: #000000;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  transition: opacity 1s ease-out;
  opacity: 1;
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
    padding: 2rem 0.5rem;
  }
  .card {
    height: auto;
    min-height: 180px;
    width: 75%;
    padding: 0;
  }
  .card h1 {
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
  }
  .card li {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 769px) {
  .top-header {
    flex-direction: column;
  }
}
</style>
