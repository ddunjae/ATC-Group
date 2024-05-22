import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import LoginPage from '../views/LoginPage.vue';
import MonitoringDashboard from '../views/MonitoringDashboard.vue';
import PingSpeed from '../views/PingSpeed.vue';
import NetworkConnections from '../views/NetworkConnections.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
