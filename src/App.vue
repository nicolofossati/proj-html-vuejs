<template>
  <PageHeader :navBar="NavBar" :selectedLink="selectedNBLink" />
  <PageHero />

  <PageMain />
  <PageFooter :navBar="NavBar" :selectedLink="selectedNBLink" />
</template>

<script>
export default {
  data() {
    return {
      NavBar: ['Home', 'Who We Are', 'What We Do', 'Where We Work', 'Careers', 'News', 'Get in touch now'],
      selectedNBLink: 0 //indica il link della navbar selezionato al momento. (Indice NabBar array)
    }
  }, components: {
    PageHeader, PageHero, PageMain, PageFooter, PrimaryButton, SecondaryButton
  }
}

import "@fontsource/open-sans";

import PageHeader from './components/PageHeader.vue';
import PageHero from './components/PageHero.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import PrimaryButton from './components/PrimaryButton.vue';
import SecondaryButton from './components/SecondaryButton.vue';
</script>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/colors.scss" as *;
</style>
