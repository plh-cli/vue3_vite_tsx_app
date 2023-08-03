import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../App.tsx';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    name: 'home',
    component: () => import('@/views/home'),
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  }
];

const router = createRouter({
  history: createWebHistory(),//createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
