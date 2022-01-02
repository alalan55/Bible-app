import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Verso from '../components/templates/VersoTemplate.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component:  Home
  },
  {
    path: "/bibles",
    name: "Bibles",
    component: () =>
      import(/* webpackChunkName: "bibles" */ "../views/Bibles.vue"),
  },
  {
    path: "/livros/:id",
    name: 'Livros',
    component: () =>
      import(/* webpackChunkName: "livros" */ "../views/Livros.vue"),
  },
  {
    path: "/pagina",
    name: 'PaginaLivro',
    component: () =>
      import(/* webpackChunkName: "paginaLivro" */ "../views/PaginaLivro.vue"),
      children: [
        {
          path: 'verso',
          name: 'Verso',
          component: Verso
         // component: (/* webpackChunkName: "versoLivro" */ "../components/templates/VersoTemplate.vue")
        }
      ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
