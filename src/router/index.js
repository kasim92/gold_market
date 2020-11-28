import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Store/AppStore.vue'
import Login from "../views/Login";
import AppDashboard from "../views/Dashboard/AppDashboard"
import AddItem from "../views/Dashboard/AddItem";
import Admin from "../views/Dashboard/HomeDashboard";
import HomeStore from "../views/Store/HomeStore";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/',
        name:'home',
        component: HomeStore
      },
    ]
  },
  {
    path: '/dashboard',
    component: AppDashboard,
    children:[
      {
        path: '/',
        name:'admin',
        component: Admin
      },
      {
        path: 'add_item',
        name:'additem',
        component: AddItem
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
   { path: "*", component: HomeStore }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
