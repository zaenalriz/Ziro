import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/admin/Dashboard.vue";
import Alert from "../views/admin/Alert.vue";

const router = createRouter({
  history: createWebHistory("/"), //test_v
  mode: "history",
  // base: "/test_v/",
  routes: [
    {
      path: "/",
      name: "dahsboard",
      component: Dashboard,
    },
    {
      path: "/alert",
      name: "alert",
      component: Alert,
    },
  ],
});

export default router;
