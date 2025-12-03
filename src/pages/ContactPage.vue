<script setup>
import ContactForm from '@/components/ContactForm.vue'
</script>

<template>
  <div class="container">
    <div class="left-container">
      <div class="content-container">
        <h1>Book an online class now !</h1>
        <p>
          If you want to contact me for a class or ant question you can fill the form. First class
          is free, as we will discuss my teaching methods and how i work. Feel free to say hi !
        </p>
      </div>
      <div class="img-container">
        <img src="/img/yejin_draw.png" alt="yejin_draw" />
      </div>
    </div>
    <div class="right-container">
      <Transition name="fade" appear>
        <ContactForm />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
}
.left-container,
.right-container {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-container {
  padding-top: 2rem;
}
.img-container,
.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.img-container img {
  z-index: -3;
}
.content-container h1 {
  font-size: 2rem;
}
.content-container p {
  font-size: 1.5rem;
  padding: 0 2rem;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  transition: opacity 1s 0.5s;
  opacity: 1;
}
@media screen and (max-width: 1160px) {
  .container {
    height: auto;
    flex-direction: column;
  }
  .left-container {
    height: 25dvh;
    padding: 2rem 10rem;
  }
  .right-container {
    display: flex;
    flex-direction: column;
    height: 75dvh;
    padding: 2rem 0;
  }
  .img-container {
    flex: 0;
    position: absolute;
    top: 90px;
    left: 0;
    align-items: center;
  }
  .content-container {
    text-align: center;
    margin-left: 5rem;
    padding-top: 0;
  }
  .content-container h1 {
    font-size: 1.8rem;
  }
  .content-container p {
    font-size: 1.3rem;
  }
  .img-container img {
    height: 240px;
    width: 240px;
  }
}
@media screen and (max-width: 769px) {
  .img-container {
    display: none;
  }
  .left-container {
    padding: 2rem;
  }
  .content-container {
    width: 100%;
    margin: 0;
  }
  @media screen and (max-width: 450px) {
    .content-container h1 {
      font-size: 1.6rem;
    }
    .content-container p {
      font-size: 1.2rem;
    }
  }
}
</style>
