import { createRouter, createWebHashHistory } from "vue-router";

import AboutPage from "@/pages/AboutPage.vue";
import HomePage from "@/pages/HomePage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostPage from "@/pages/PostPage.vue";
import Vue3PostsPage from "@/pages/Vue3PostsPage.vue";
import TodosPage from "@/pages/TodosPage.vue";
import TodoPage from "@/pages/TodoPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/vuex-posts",
    component: PostsPage,
  },
  {
    path: "/vuex-posts/:id",
    component: PostPage,
  },
  {
    path: "/vue3-posts",
    component: Vue3PostsPage,
  },
  {
    path: "/vue3-todos",
    component: TodosPage,
  },
  {
    path: "/vue3-todos/:id",
    component: TodoPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router;