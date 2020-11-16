<template>
  <div class="row">
    <div class="columns small-12" v-if="getCountCart === 0"><h3>There is no items in your shopping cart</h3></div>
    <div class="columns small-12 medium-6" v-if="getCountCart > 0">
      <app-shopping-cart-list
      v-for="(product, index) in shoppingCart"
      :key="index"
      :index="index"
      :id="product.id"
      :p_name="product.name.en"
      :p_price="product.price"
      @removeItem="index => deleteItem(index)"
      
      ></app-shopping-cart-list>
      <div class="columns small-12 total-price">
        <h4>Total price: <strong>{{ totalPrice }}</strong> kr</h4>
        
      </div>
    </div>
    <div class="columns small-12 medium-6 form" v-if="getCountCart> 0">
      <app-purchase-form></app-purchase-form>
    </div>
  </div>
</template>

<script>
import Form from '../components/Form.vue';
import ShoppingCartList from '../components/ShoppingCartList.vue';
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      totalprice: null
    }
  },
  computed: {
    ...mapState([
      'shoppingCart'
    ]),
    ...mapGetters([
      'getCountCart',
      'getTotalprice'
    ]),
    totalPrice() {
      return this.$store.getters.getTotalprice
    }
  },
  methods: {
    ...mapActions([
      'deleteItemInCart'
    ]),
    deleteItem(index) {
      this.deleteItemInCart(index)
    }
  },
  components: {
    'app-shopping-cart-list': ShoppingCartList,
    'app-purchase-form': Form 
  }
}
</script>

<style scoped lang="scss">
  .total-price {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    border-top: 1px dashed rgb(236, 236, 236);
  }

</style>
