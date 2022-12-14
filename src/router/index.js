import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainView,
    },
    {
      path: "/rules",
      name: "Rules & Policies",
      component: () => import("../views/RulesView.vue"),
    },
    {
      path: "/work",
      name: "Work with Us",
      component: () => import("../views/WorkView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/login",
      name: "LogIn",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/favs",
      name: "Favourites",
      component: () => import("../views/FavsView.vue"),
    },
    {
      path: "/help",
      name: "Help",
      component: () => import("../views/HelpView.vue"),
    },
    {
      path: "/newPost",
      name: "New Post",
      component: () => import("../views/NewPostView.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path: "/posts",
      name: "Posts",
      component: () => import("../views/PostsView.vue"),
    },
    {
      path: "/post/:id",
      name: "Post",
      component: () => import("../views/PostView.vue"),
    },
  ],
});

export default router;
