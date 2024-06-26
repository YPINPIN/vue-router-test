import { createRouter, createWebHashHistory } from 'vue-router';
// 靜態導入
import Home from '@/views/Home.vue';

// 配置路由規則
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // 動態導入(懶加載)
    component: () => import('@/views/About.vue'),
  },
  // 設置 404 NotFound 頁面
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

// 創建路由實例
const router = createRouter({
  // 指定模式
  history: createWebHashHistory(import.meta.env.BASE_URL + '#/app/'),
  // 設定前面配置的路由
  routes,
});

// 共享路由實例
export default router;
