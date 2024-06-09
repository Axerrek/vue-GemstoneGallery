import { createApp } from "vue";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Contact from "./views/Contact.vue";
import Checkout from "./views/Checkout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");
