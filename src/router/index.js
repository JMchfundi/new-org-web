import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutUsView.vue"),
  },
  {
    path: "/contactus",
    name: "contactus",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ContactUs.vue"),
  },
  {
    path: "/howtosupport",
    name: "howtosupport",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/HowToSupportUs.vue"),
  },
  {
    path: "/whykyaf",
    name: "whykyaf",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/SupportUsView.vue"),
  },
  {
    path: "/policycycle",
    name: "policycycle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/PolicyCycle.vue"),
  },
  {
    path: "/mya",
    name: "mya",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/MYAHomeView.vue"),
  },
  {
    path: "/kiya",
    name: "kiya",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/KiYAHomeView.vue"),
  },
  {
    path: "/kiyahouseleaders",
    name: "kiyahouseleaders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/KiYAHouseLeaders.vue"),
  },
  {
    path: "/advteam",
    name: "advteam",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/AdvTeamView.vue"),
  },
  {
    path: "/mngteam",
    name: "mngteam",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/MngTeamView.vue"),
  },
  {
    path: "/myaexeccom",
    name: "myaexeccom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/MYAExecView.vue"),
  },
  {
    path: "/myamps",
    name: "myamps",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/MYAMPsView.vue"),
  },
  {
    path: "/myacs",
    name: "myacs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/MYACS.vue"),
  },
  {
    path: "/kiyacs",
    name: "kiyacs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/KiYACS.vue"),
  },
  {
    path: "/kiyaexeccom",
    name: "kiyaexeccom",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/KiYAExecView.vue"),
  },
  {
    path: "/ourprograms",
    name: "ourprograms",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/OurPrograms.vue"),
  },
  {
    path: "/ouractivities",
    name: "ouractivities",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/OurActivities.vue"),
  },
  {
    path: "/kiyamps",
    name: "kiyamps",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "team" */ "@/views/KiYAMPsView.vue"),
  },

  // {
  //   path: '/service',
  //   name: 'service',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "service" */ '@/views/ServiceView.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactView.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
