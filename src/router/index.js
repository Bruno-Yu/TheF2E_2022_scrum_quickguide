import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/roles",
    name: "roles",
    component: () => import("../views/RolesView.vue"),
  },
  {
    path: "/product",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/product-backlog",
    name: "product-backlog",
    component: () => import("../views/ProductBView.vue"),
  },
  {
    path: "/sprint",
    name: "sprint",
    component: () => import("../views/SprintView.vue"),
  },
  {
    path: "/sprint-intro",
    name: "sprint-intro",
    component: () => import("../views/SprintIntroView.vue"),
  },
  {
    path: "/sprint-arrange",
    name: "sprint-arrange",
    component: () => import("../views/SprintArrangeView.vue"),
  },
  {
    path: "/sprint-retro",
    name: "sprint-retro",
    component: () => import("../views/SprintRetroView.vue"),
  },
  {
    path: "/sprint-backlog",
    name: "sprint-backlog",
    component: () => import("../views/SprintBView.vue"),
  },
  {
    path: "/final",
    name: "final",
    component: () => import("../views/FinalView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
