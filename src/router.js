import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/men",
      name: "men",
      component: () => import("./views/Men.vue")
    },
    {
      path: "/woman",
      name: "woman",
      component: () => import("./views/Woman.vue")
    },
    {
      path: "/clothes",
      name: "clothes",
      component: () => import("./views/Clothes.vue")
    },
    {
      path: "/shoppingCart",
      name: "shoppingCart",
      component: () => import("./views/ShoppingCart.vue")
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("./views/Product.vue"),
      props: route => ({
        id: route.params.id
      })
    },
    {
      path: "/stores",
      name: "stores",
      component: () => import("./views/Stores.vue")
    },
    {
      path: "/editorials",
      name: "editorials",
      component: () => import("./views/Editorials.vue")
    }
  ]
});
