<template>
  <div class="header-hero">
    <PageHeader :navBar="NavBar" :selectedLink="selectedNBLink" />
    <PageHero />
  </div>

  <PageMain />
  <PageFooter :navBar="NavBar" :selectedLink="selectedNBLink" />
</template>

<script>
export default {
  data() {
    return {
      NavBar: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers', 'News', 'Get in touch now'],
      selectedNBLink: 0
    }
  }, components: {
    PageHeader, PageHero, PageMain, PageFooter
  }
}

import "@fontsource/open-sans";

import PageHeader from './components/PageHeader.vue'
import PageHero from './components/PageHero.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>
