<template>
  <div class="column column-block product-card" @click="p_select">
    <img :src="imageURL" alt="Product image">
    <!-- <p>{{ brand }}</p> -->
    <h6>{{ p_name }}</h6>
    <p><strong>{{ vatPrice }} kr</strong></p>
  </div>
</template>

<script>
export default {
  props: ['brand', 'p_name', 'p_price', 'index', 'id', 'image_id'],
  data() {
    return {
      productImage: '',
      baseImageURL: "https://jockedev.testavendre.se:443/API/1/image/",
      image: this.image_id[0].id,
      baseURL: "https://jockedev.testavendre.se",
      imageURL: ''
    }
  },
  created() {
    fetch(this.baseImageURL + this.image, {
        method: 'get',
        headers: {
            'X-Authorization': 'XXXXXXX',
            'credentials': 'include'
        }
    }).then(response => {
        response.json()
        .then((json) => {
          this.productImage = json.image;
          this.imageURL = this.baseURL + this.productImage;
      });
    }).catch(error => {
      // eslint-disable-next-line 
        console.log(error);
    });
  },
  computed: {
    vatPrice() {
      return this.p_price * 1.25
    }
  },
  methods: {
    p_select() {
      this.$router.push('/product/'+this.id);
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-card {
    cursor: pointer;
    position: relative;

    .column:last-child:not(:first-child), 
    .columns:last-child:not(:first-child) {
      float: left;
    }
    
    img {
      margin-bottom: 10px;
    }

    p {
      text-align: right;
      line-height: 1.7;
      word-break: break-all;
      font-size: 18px;
    }
  }


  
</style>
