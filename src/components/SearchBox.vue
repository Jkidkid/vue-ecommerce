<template>
  <div class="row search-box-container" >
    <div class="columns small-12 seach-box">
      <input type="text" v-model="search">
    </div>
    <div class="search-result">
      <ul>
        <li 
        v-for="(result, index) in searchProduct" 
        :key="index"
        ><router-link :to="'/product/'+result.id">{{ result.name.sv }}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: 'Search product'
    }
  },
  computed: {
    searchProduct() {
      return this.$store.getters.getSearchResult(this.search)
    }
  }
}
</script>

<style scoped lang="scss">

.search-box-container {
  margin: 0 auto;
  position: relative;

  .seach-box {
    height: 100px;

    input {
      border: none; 
      outline: none;
      box-shadow: none;
      border-bottom: 2px solid rgb(204, 204, 204);
      text-align: center;

      &::placeholder {
        color: #000;
      }

      &:active,
      &:focus {
        border-bottom: 2px solid #000;
      }
    }
  }
  .search-result {
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 3;
    background-color: #fff;
    -webkit-box-shadow: 13px 10px 31px -23px rgba(102,102,102,0.69);
    -moz-box-shadow: 13px 10px 31px -23px rgba(102,102,102,0.69);
    box-shadow: 13px 10px 31px -23px rgba(102,102,102,0.69);

    ul {
      margin: 0; 
      padding: 20px;
      height: 250px;
      overflow-y: scroll;

      li {
        margin: 10px 0;
      }
    }
  }
}
</style>
