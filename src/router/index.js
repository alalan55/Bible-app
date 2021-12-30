import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'

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
      // children: [
      //   {
      //     path: 'capitulo',
      //     // o componente vai ser um template que vai carregar sempre um conteudo diferente
      //   }
      // ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
