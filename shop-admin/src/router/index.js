import { createRouter, createWebHashHistory } from "vue-router";
import Index from "~/pages/index.vue";
import Abuot from "~/pages/about.vue";
import NotFound from "~/pages/404.vue";
const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/about",
    component: Abuot,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
