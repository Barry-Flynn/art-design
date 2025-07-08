<template>
  <div class="page-content welcome">
    <div class="welcome-text">Art Design</div>
    <img alt="Welcome" src="@/assets/img/login/lf_icon2.webp" />

    <AboutProject />
  </div>
</template>

<script setup lang="ts">
  import AboutProject from './widget/AboutProject.vue'

  defineOptions({ name: 'Welcome' })
</script>

<style lang="scss" scoped>
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      bottom: -7.5rem;
      width: 18rem;
      height: 18rem;
    }

    .welcome-text {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--art-text-gray-800);
    }
  }
</style>
