import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LightNetwork from "@/views/LightNetwork";
import TimeNetwork from "@/views/TimeNetwork";
import DataNetwork from "@/views/DataNetwork";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/light",
    name: "lightNetwork",
    component: LightNetwork
  },
  {
    path: "/time",
    name: "timeNetwork",
    component: TimeNetwork
  },
  {
    path: "/data",
    name: "dataNetwork",
    component: DataNetwork
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
