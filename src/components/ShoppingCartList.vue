<template>
  <div class="row list-item">
    <div class="columns small-2 product-image">
      <img src="../assets/image-placeholder.png" alt="Product image" class=" p_main_image">
    </div>
    <div class="columns small-7 product-details">
      <p><strong>{{ p_name }}</strong></p>
    </div>
    <div class="columns small-3 product-price">
      <p><strong>{{ p_price + (p_price * 0.25) }} kr</strong></p>
      <p class="remove-link" @click.prevent="removeProduct">Remove item</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    brand: {
      type: String
    },
    p_name: {
      type: String
    },
    p_price: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    removeProduct() {
      this.$emit('removeItem', this.index);
    }
  }

}
</script>

<style scoped lang="scss">
.list-item {
  margin-bottom: 20px;

  .product-details,
  .product-price {
    padding: 0 5px;
  }

  .product-image {

  }

  p {
    line-height: 1;
    margin-bottom: 10px;
  }
  .remove-link {
    cursor: pointer;
    text-decoration: underline;
    font-size: 12px;
  }
}

</style>
