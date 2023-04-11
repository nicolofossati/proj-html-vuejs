<template>
  <div class="header-hero">
    <PageHeader :navBar="HeaderNavBar" />
    <PageHero />
  </div>

  <PageMain />
  <PageFooter />
</template>

<script>
export default {
  data() {
    return {
      HeaderNavBar: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers', 'News', 'Get in touch now']
    }
  }, components: {
    PageHeader, PageHero, PageMain, PageFooter
  }
}


import PageHeader from './components/PageHeader.vue'
import PageHero from './components/PageHero.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<style lang="scss">
@use "./styles/general.scss";
</style>
