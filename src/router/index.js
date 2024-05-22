import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import LoginPage from '../views/LoginPage.vue';
import MonitoringDashboard from '../views/MonitoringDashboard.vue';
import PingSpeed from '../views/PingSpeed.vue';
import NetworkConnections from '../views/NetworkConnections.vue';
import AppPage1 from '@/views/AppPage1.vue';
import AppPage2 from '@/views/AppPage2.vue';
import AppPage3 from '@/views/AppPage3.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/system-status',
    name: 'SystemStatus',
    component: MainPage
  },
  {
    path: '/network',
    name: 'Network',
    component: MainPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/monitoring-dashboard',
    name: 'MonitoringDashboard',
    component: MonitoringDashboard
  },
  {
    path: '/ping-speed',
    name: 'PingSpeed',
    component: PingSpeed
  },
  {
    path: '/network-connections',
    name: 'NetworkConnections',
    component: NetworkConnections
  },
  {
    path: '/page1',
    name: 'Page1',
    component: AppPage1
  },
  {
    path: '/page2',
    name: 'Page2',
    component: AppPage2
  },
  {
    path: '/page3',
    name: 'Page3',
    component: AppPage3
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  if (to.name !== 'Login' && !token) {
    return next({ name: 'Login' });
  }

  if (userRole) {
    if (userRole === 'page1' && to.name !== 'Page1') {
      return next({ name: 'Page1' });
    }
    if (userRole === 'page2' && to.name !== 'Page2') {
      return next({ name: 'Page2' });
    }
    if (userRole === 'admin' && (to.name === 'Page1' || to.name === 'Page2' || to.name === 'Page3')) {
      return next();
    }
  }

  next();
});

export default router;
