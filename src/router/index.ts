import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../App.tsx';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test')
  }
];

const router = createRouter({
  history: createWebHistory(),//createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
