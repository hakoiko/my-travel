import AsiaSingaporeVue from '@/pages/AsiaSingapore.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AsiaSingaporeVue,
    },
  ],
})

export default router
