<template>
  <HeaderMagazine></HeaderMagazine>
  <MainPage></MainPage>
  <FooterMagazine></FooterMagazine>
</template>

<script>
import HeaderMagazine from './components/HeaderMagazine.vue'
import FooterMagazine from './components/FooterMagazine.vue'

import MainPage from './components/MainPage.vue';
export default {
  name: 'App',
  components: {
    MainPage,
    HeaderMagazine,
    FooterMagazine
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width:100%;
}
</style>
