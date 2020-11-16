<template>
  <div class="product-page-wrapper">
    <!-- Template for small and medium size screens -->
    <div class="row">

      <div class="columns small-12">
        <div class="product-image-slider">
          <app-product-images 
          v-for="(image, index) in product.images" 
          :key="index"
          :index="index"
          :id="image.id"
          :name="image.name"
          ></app-product-images>
        </div>
        <div class="row columns show-for-large">
          <div class="button scroll-button" @click="scroll_left">&#8678; </div>
          <div class="button scroll-button" @click="scroll_right">&#8680;</div>
        </div>
      </div>

      <div class="columns small-12">
        <div class="row">
          <div class="columns small-9">
            <h3>{{ product.name.en }}</h3>
            <p class="artNr">{{ product.article_number }}</p>
            <h4><strong>{{ vatPrice }} kr</strong></h4>
          </div>
          <div class="columns small-3 product-page-logo">
            <h3>"LOGO"</h3>
          </div>
          <div class="columns small-12 medium-6">
            <a href="" class="button expanded call-to-action" @click.prevent="addToCart">Add to cart</a>
        </div>
        <div class="columns small-12 medium-6 description">
            <h5>Desciption</h5>
            <p>{{ descriptionRender }}</p>
        </div>
      </div>
    </div>

  </div>



  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import ProductImage from '@/components/ProductImage.vue'


export default {
  props: ['index', 'brand'],

  data: function() {
    return {
      id: this.$route.params.id,
      product: {},
      product_images_url: []
    }
  },
  beforeMount() {
    this.product = this.$store.getters.getProduct(this.id)
  },
  computed: {
    ...mapState([
      // 'products'
    ]),
    ...mapGetters([
      'getProduct',
      'getVatPrice'
    ]),
    vatPrice() {
      return this.product.price * 1.25
    },
    descriptionRender() {
      let regex = /(<([^>]+)>)/ig;
      return this.product.description.sv.replace(regex, "");
    }
  },
  methods: {
    watchProductCard() {
      if(this.product == null) {
        this.$router.push('/');
      }
    },
    ...mapMutations([
      'SET_SHOPPINGCART'
    ]),
    addToCart() {
      this.SET_SHOPPINGCART(this.product)
    },
    getImage() {
      this.product_images_url = this.product.images.map(image => image.id)
    },
    scroll_left() {
      let content = document.querySelector(".product-image-slider");
      content.scrollLeft -= 500;
    },
    scroll_right() {
      let content = document.querySelector(".product-image-slider");
      content.scrollLeft += 500;
    }
  },
  components: {
    'app-product-images': ProductImage
  }
}
</script>

<style scoped lang="scss">
  .columns {
    
    .call-to-action,
    .scroll-button {
      background-color: rgb(100, 100, 100);
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 2px;
      color: rgb(221, 221, 221);

      &:hover {
        background-color: rgb(131, 131, 131);
        color: rgb(255, 255, 255);
      }
    }

    .scroll-button {
      margin: 10px 5px;
    }

    .p_image {
      margin: 10px 0;
    }
  }

  h3 {
    text-align: left;
    padding: 0;
  }

  .p_main_image {
    height: 500px;
    width: 100%;
    object-fit: cover;
  }

  .product-page-header {
    margin-top: 40px;
    height: 300px;

    .product-page-price {
      display: flex;
      justify-content: flex-end;
    }
  }

  .product-image-slider {
    overflow: auto;
    white-space: nowrap;
    scroll-behavior: smooth;

    .product-image-item {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px;
      text-decoration: none;
      height: 600px;
    }

    &.product-image-slider::-webkit-scrollbar { 
      display: none; 
    }
  }
.product-page-logo {
  display: flex;
  justify-content: flex-end;
}
.description {
  padding: 0 20px;
}
.artNr {
  text-transform: uppercase;
}
</style>
