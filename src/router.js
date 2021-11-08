import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

import Index from './pages/index.vue'
import About from './pages/about.vue'
import Items from './pages/itemList.vue'
import Contact from './pages/contact.vue'
import PageNotFound from './pages/404.vue'
import Secret from './pages/secret.vue'
import Login from './pages/login.vue'

const { isAuthenticated } = useAuth();

const routes = [{
  path: "/",
  name: "Index",
  component: Index,
},
{
  path: "/about",
  name: "About",
  component: About,
},
{
  path: "/itemList",
  name: "Items",
  component: Items,
},
{
  path: "/contact",
  name: "Contact",
  component: Contact,
},
{
  path: "/login:",
  name: "Login",
  component: Login,
},
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    beforeEnter: (to, from, next) => {
      console.log(isAuthenticated);
      if (!isAuthenticated.value) {
        next("/login");
      }
      next();
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
