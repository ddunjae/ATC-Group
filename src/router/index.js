import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import LoginPage from '../views/LoginPage.vue';
import AppPage1 from '../views/AppPage1.vue';
import AppPage2 from '../views/AppPage2.vue';
import AppPage3 from '../views/AppPage3.vue';
import SystemStatus from '../views/SystemStatus.vue';
import Network from '../views/Network.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/app-page1',
    name: 'AppPage1',
    component: AppPage1,
    meta: { requiresAuth: true }
  },
  {
    path: '/app-page2',
    name: 'AppPage2',
    component: AppPage2,
    meta: { requiresAuth: true }
  },
  {
    path: '/app-page3',
    name: 'AppPage3',
    component: AppPage3,
    meta: { requiresAuth: true }
  },
  {
    path: '/system-status',
    name: 'SystemStatus',
    component: SystemStatus,
    meta: { requiresAuth: true }
  },
  {
    path: '/network',
    name: 'Network',
    component: Network,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = !!localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
