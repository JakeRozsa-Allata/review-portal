import { createWebHistory, createRouter } from "vue-router";

// Define your route configuration
const routes = [
 {
  path: "/",
  component: () => import("../components/base-page/main-page.vue"), // Home page
 },
 {
  path: "/about",
  component: () => import("../components/base-page/about-main.vue"), // About page
 },
];

// Create the router
export const router = createRouter({
 history: createWebHistory(),
 routes,
});
