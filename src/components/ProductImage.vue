<template>
  <div class="product-image-item" :id="id">
    <img :src="imageURL" :alt="imageAlt">
  </div>
</template>

<script>
export default {
  props: ['index', 'id', 'name'],
  data() {
    return {
      productImage: '',
      baseImageURL: "https://jockedev.testavendre.se:443/API/1/image/",
      baseURL: "https://jockedev.testavendre.se",
      image: this.id,
      imageURL: '',
      imageAlt: this.name
    }
  },
  created() {
    fetch(this.baseImageURL + this.id, {
      method: 'get',
      headers: {
          'X-Authorization': 'XXXXX',
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
  }
}
</script>

<style scoped>
      img {
        object-fit: cover;
        overflow: hidden;
        height: 100%;
        width: 100%;
      }
</style>
