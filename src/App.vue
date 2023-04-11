<script setup>

import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <div class="header-hero">
    <PageHeader />
    <!-- <MyHero /> -->
  </div>

  <PageMain />
  <PageFooter />
</template>



<style lang="scss">
@use "./styles/general.scss";
</style>
