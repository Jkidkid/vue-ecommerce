<template>
  <div class="row small-up-2 medium-up-3 large-up-4">
    <appProductCard
       v-for="(product, index) in products"
      :key="index"
      :index="index"
      :id="product.id"
      :image_id="product.images"
      :p_name="product.name.en"
      :p_price="product.price"
      :p_article_number="product.article_number"
      @click.native="scrollToTop"
    ></appProductCard>
  </div>
</template>

<script>
import { mapState } from "vuex"; 
// import axios from "axios";

import ProductCard from "@/components/ProductCard.vue";
 
export default {
  
    beforeMount() {
  //     fetch('https://jockedev.testavendre.se/API/1/products?categories_any_id=266', {
  //         method: 'get',
  //         headers: {
  //             'X-Authorization': 'XXXXXX',
  //             'credentials': 'include'
  //         }
  //     }).then(response => {
  //         response.json()
  //         .then((json) => {
  //           // eslint-disable-next-line 
  //           console.log(json);
  //           this.products = json.list;
  //           // eslint-disable-next-line 
  //           console.log(this.products);
  //       });
  //     }).catch(error => {
  //       // eslint-disable-next-line 
  //         console.log(error);
  //     });
  // this.$store.dispatch("fetchProducts");
  },
  computed: {
    ...mapState([
      "products"
      ])
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  components: {
    'appProductCard': ProductCard
  }
};
</script>

<style lang="scss" scoped>

</style>
