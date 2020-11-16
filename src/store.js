/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);
const key = "XXXX";
const productURL = "product-url";
const baseImageURL = "product-image-url";


export default new Vuex.Store({
  state: {
    loadingStatus: "notLoading",
    shoppingCart: [],
    categories: [],
    products: [],
    products_images: [],
    fakeData: []
  },
  getters: {
    getShoppingCart: state => {
      return state.shoppingCart
    },
    getProduct: (state) => (id) => {
      return state.products.find(product => product.id == id)
    },
    getCountCart: state => {
      return state.shoppingCart.length
    },
    getTotalprice: state => {
      return state.shoppingCart.reduce((total, product) => total += parseInt(product.price * 1.25), 0);
    },
    getVatPrice: state => {
      return parseInt(state.product.price * 1.25)
    },
    getSearchResult: (state) => (result) => {
      return state.products.map((product) => {
        return {'id': product.id, 'name': product.name} }).filter((product) => { 
          return product.name.sv.toLowerCase().includes(result.toLowerCase())
        })
    }
  },
  mutations: {
    SET_LOADING_STATUS(state, status) {
      state.loadingStatus = status;
    },
    SET_SHOPPINGCART(state, item) {
      state.shoppingCart.push(item);
    },
    SET_CATEGORIES(state, category) {
      state.categories = category;
    },
    SET_PRODUCTS(state, product) {
      state.products = product;
    },
    SET_PRODUCTS_IMAGES(state, image) {
      state.products_images.push(image);
    },
    SET_FAKEDATA(state, user) {
      state.fakeData = user;
    },
    REMOVE_FROM_CART(state, index) {
      state.shoppingCart.splice(index, 1)
    },
    EMPTY_ARRAY(state) {
      state.shoppingCart = []
    }
  },
  actions: {
    fetchProducts(context) {
      fetch(productURL, {
        method: 'get',
        headers: {
            'X-Authorization': key,
            'credentials': 'include'
        }
    }).then(response => {
        response.json()
        .then((json) => {
          const products = json.list;
          context.commit("SET_PRODUCTS", products);
      });
    }).catch(error => {
      // eslint-disable-next-line 
        console.log(error);
    });
    },
    addItem(context, item) {
      context.commit('SET_SHOPPINGCART', item);
    },
    deleteItemInCart(context, index) {
      context.commit('REMOVE_FROM_CART', index)
    }
  }
});