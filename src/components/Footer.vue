<template>
    <div class="row footer">
      <div class="columns small-5 medium-3">
        <!-- <h6>LOGO</h6> -->
        <img src="../assets/facebook.svg" alt="">
        <img src="../assets/instagram.svg" alt="">
      </div>
      <div class="columns medium-2 show-for-medium">
        <h6>Shop</h6>
        <ul>
          <li><router-link to="/men">Men</router-link></li>
          <li><router-link to="/woman">Woman</router-link></li>
          <li><router-link to="/clothes">Clothes</router-link></li>
        </ul>
      </div>
      <div class="columns small-7 medium-3">
        <h6>Customer service</h6>
        <ul>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Returns and Exhanges</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Payment options</a></li>
        </ul>
      </div>
      <div class="columns small-12 medium-4 news-letter">
        <h6>Sign up for newsletter and get 10% off on your next purchase</h6>
        <label for="news-letter">
          <input type="text" placeholder="Fill in your email">
          <a href="#" class="button" @click.prevent="">Send</a>
        </label>
      </div>
    </div>
</template>

<script>


export default {

}
</script>

<style scoped lang="scss">
  .footer {
    width: 100%;
    height: 200px;
    background-color: #fefefe;
    border-top: 1px dashed rgb(236, 236, 236);
    margin-top: 30px;
    padding: 20px 0;

    ul {
    list-style: none;
    display: block;
    margin: 10px 0 0 0;

      li {
        display: block;
        margin: 0 10px;
        
        a {
          color: #2c3e50;
        }
      }
    }

    .button {
      background-color: darkgray;
      color: #fff;
      font-weight: bold;
      float: right;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 20px;
    }
    
    @media screen and (max-width: 756px) {
      .news-letter {
        margin-top: 30px;
      }
    }
  }

</style>
