<template>
  <div>
    <h1 class="show-for-medium">Woman</h1>
    <div class="splash">
      <img src="../assets/w-hero.jpg" alt="Hero image">
    </div>
    <h1 class="heading-mobil show-for-small-only">Woman</h1>
    <app-product-listning></app-product-listning>
  </div>
</template>

<script>
import ProductListning from '../components/ProductListning.vue';

export default {
  components: {
    'app-product-listning': ProductListning
  }
}
</script>

<style scoped lang="scss">
  h1 {
    text-align: left;
    font-weight: 700;
    font-size: 50px;
    margin-left: 50px;
  }
  
  .splash {
    border: 1px solid darkgray;
    width: 100%;
    margin-bottom: 50px;

    img {
      height: 100%; 
      width: 100%; 
      object-fit: contain;
    }
  }
  
  @media screen and (max-width: 600px){
    .heading-mobil {
      margin-left: 10px;
    }
    .splash {
      margin-bottom: 30px;
    }
  }

</style>
