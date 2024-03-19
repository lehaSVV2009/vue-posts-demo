import { createRouter, createWebHistory } from "vue-router";

import AboutPage from "@/pages/AboutPage.vue";
import MainPage from "@/pages/MainPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import PostPage from "@/pages/PostPage.vue";
import Vue3PostsPage from "@/pages/Vue3PostsPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;