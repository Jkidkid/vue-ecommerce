<template>
  <div class="home">
    <div class="text">
      <h1>Now you must begin to shop!</h1>
      <h1>Now you must begin to shop!</h1>
      <h1>Now you must begin to shop!</h1>
      <h1>Now you must begin to shop!</h1>
      <h1>Now you must begin to shop!</h1>
      <h1>Now you must begin to shop!</h1>
    </div>
    <div class="index-image">
      <img src="../assets/index-collage-1.webp" alt="Collage image">
    </div>
  </div>
</template>

<script>
export default {
}

</script>

<style scoped lang="scss">
  .home {
    margin-bottom: 20px;
    min-height: 80vh;
    position: relative;

    .text {
      margin-left: 40px;
    }

    .index-image {
      position: absolute;
      top: 50px;
      right: 40px;
      z-index: -1;
    
      img {
        height: auto;
        width: 500px;
      }
    }
  }
</style>
