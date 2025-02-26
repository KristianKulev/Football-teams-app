import { createRouter, createWebHistory } from "vue-router";
import MyTeams from "@/views/MyTeams.vue";
import About from "@/views/About.vue";

const routes = [
  { path: "/", component: MyTeams },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
