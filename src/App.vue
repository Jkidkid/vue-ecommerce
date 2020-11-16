<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view/>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  beforeCreate() {
    this.$store.dispatch("fetchProducts");
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  ul {
    list-style: none;
  }
}


</style>
