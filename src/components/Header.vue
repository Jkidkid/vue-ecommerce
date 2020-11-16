<template>
  <header>
    <!-- template for medium size screen and up -->
    <nav class="row show-for-medium">
      <div class="columns medium-2">
        <router-link to="/">
          <div class="logo-wrapper">
            <img class="logo show-for-medium" src="../assets/mint.png" alt="Mint logo">
          </div>
          <h1 class="show-for-small-only">MINT</h1>
        </router-link>
      </div>
      <div class="columns medium-10">
        <div class="row">
          <div class="columns medium-12 topbar medium-screen">
            <ul>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/stores">Stores</router-link></li>
              <li><router-link to="/editorials">Editorials</router-link></li>
            </ul>
          </div>
          <div class="columns medium-9 medium-screen">
            <ul>
              <li><router-link to="/men">Men</router-link></li>
              <li><router-link to="/woman">Woman</router-link></li>
              <li><router-link to="/clothes">Clothes</router-link></li>
            </ul>
          </div>
          <div class="columns medium-3 header-icons">
            <div class="search-wrapper"  @click="showInput">
              <img src="../assets/search.svg"  alt="search icon">
            </div>
            <router-link to="/shoppingCart">
              <div class="shopping-cart-wrapper">
                <div class="dot" v-if="getCountCart > 0">
                  <span class="counter">{{ getCountCart }}</span>
                </div>
                <img src="../assets/shopping-bag.svg" alt="Shopping Cart">
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- template for small size screen -->
    <nav class="row show-for-small-only">
      <div class="columns small-2">
        <div class="menu-container" @click.prevent="mobileMenu">
          <img class="menu-icon" src="../assets/menu-icon.png" alt="menu">
        </div>
      </div>
      <div class="columns small-6">
        <router-link to="/">
          <h1 class="show-for-small-only">Mint</h1>
        </router-link>
      </div>
      <div class="columns small-4 header-icons">
        <div class="search-wrapper"  @click="showInput">
          <img src="../assets/search.svg"  alt="search icon">
        </div>
        <router-link to="/shoppingCart">
          <div class="shopping-cart-wrapper">
            <div class="dot" v-if="getCountCart > 0">
              <span class="counter">{{ getCountCart }}</span>
            </div>
            <img src="../assets/shopping-bag.svg" alt="Shopping Cart">
          </div>
        </router-link>
      </div>
    </nav>
    <div :class="{searchField: showSearch}">
      <app-search></app-search>
    </div>

    <div class="sidenav" ref="slideInMenu">
      <p class="close-btn" @click="closeMenu">close</p>
      <app-mobile-routes @click="closeMenu"></app-mobile-routes>
      <ul class="contact-mobile-menu">
        <li>Address: <strong>Sneaker heaven 45, Stockholm</strong></li>
        <li>email: <strong>atyourservice@mint.com</strong></li>
        <li>phone: <strong>070-don't-call-us</strong></li>
      </ul>
    </div>
  </header>
</template>

<script>
import MobileRoutes from './MobileRoutes.vue';
import { mapState ,mapGetters } from 'vuex';
import SearchBox from '@/components/SearchBox.vue';

export default {
  data() {
    return {
      search: null,
      results: this.$store.state.products,
      showSearch: true,
    }
  },
  watch: {
    '$route'() {
      this.closeMenu()
    }
  },
  computed: {
    ...mapGetters([
      'getCountCart'
    ]),
    ...mapState([
      'products'
    ])
  },
  methods: {
    mobileMenu() {
      this.showMenu = true;
      this.$refs.slideInMenu.style.width = '100%';
    },
    closeMenu() {
      this.$refs.slideInMenu.style.width = '0%';
    },
    showInput() {
      this.showSearch = !this.showSearch;
    }
    // ,
    // searchFunction(search) {
    //   const productList = this.$store.state.products;
    //    this.result = productList.name.filter(product => {
    //     return product.sv.toLowerCase().includes(search.toLowerCase())
    //   })
    // }
  },
  components: {
    'app-mobile-routes': MobileRoutes,
    'app-search': SearchBox
  }
};
</script>

<style scoped lang="scss">

.searchField {
  display: none;
}

header {
  padding: 20px 0;
  background-color: #fff;

  h1 {
    font-size: 38px;
    font-weight: bold;
    margin: 0;
    line-height: 1;
    color: rgb(131, 131, 131);
  }

  .header-icons {
    display: flex;
    justify-content: center;
    padding: 5px 0;

    .shopping-cart-wrapper {
      display: inline-block;
      position: relative;
      margin-left: 20px;


      .dot {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: rgb(75, 75, 75);
        top: -3px;
        right: -7px;

        .counter {
          position: absolute;
          line-height: 1rem;
          top: 2px;
          right: 7px;
          color: #fff;
          margin: auto;
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
    
    .shopping-cart-wrapper,
    .search-wrapper {
      width: 25px;
      height: 25px;
      cursor: pointer;
      
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .topbar {
    font-size: 14px;
    text-align: right;
    margin-bottom: 20px;
    
    ul {
        a {
        font-weight: 500;

        &:hover {
          color: #000;
        }
      }
    }
  }

  .logo-wrapper {
    width: 80px;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
  .medium-screen {
    ul {
      list-style: none;
      display: inline;

      li {
        display: inline-block;
        margin: 0 10px;

        a {
          font-weight: bold;
          color: #2c3e50;

          &.router-link-exact-active {
            color: #868686;
            font-weight: 300;
            border-bottom: 1px solid lightgray;
          }
        }
      }
    }
  }
}


.menu-container {
  height: 25px;
  width: 25px;
  padding-top: 4px;

  .menu-icon {
    height: 25px;
    width: auto;
  }
}

.sidenav {
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(41, 41, 41);
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  text-align:center;

  ul {
    text-align: left;
    margin: 30px 0 0 20px;
  }

  li {
    margin: 20px 0;
    
  }

  a {
    padding: 20px 0;
    text-decoration: none;
    font-size: 32px;
    color: #d1d1d1;
    transition: 0.2s;
    &.router-link-exact-active 

    &:hover {
      color: #f1f1f1;
    }
  }
}

.sidenav, 
.close-btn {
  position: absolute;
  top: 0;
  right: 25px;
}
.close-btn {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
  transition: opacity .5s;
  cursor: pointer;
}


@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

  @media screen and (max-width: 500px) {
    header {
      padding-top: 30px;
    }
  }
  .contact-mobile-menu {
    color: #fff;
  }

</style>
