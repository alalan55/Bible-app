import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component:  import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/bibles",
    name: "Bibles",
    component: () =>
      import(/* webpackChunkName: "bibles" */ "../views/Bibles.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
