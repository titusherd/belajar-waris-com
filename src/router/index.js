import { createRouter, createWebHistory } from 'vue-router'
import BedahWaris from '../views/BedahWaris.vue'
import Pendahuluan from '../views/Pendahuluan.vue'
import Hibah from '../views/Hibah.vue'
import Succeed from '@/views/Succeed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/checkout/bedahwaris',
      name: 'bedahwaris',
      component: BedahWaris
    },
    {
      path: '/checkout/pendahuluan',
      name: 'pendahuluan',
      component: Pendahuluan
    },
    {
      path: '/checkout/hibah',
      name: 'hibah',
      component: Hibah
    },
    {
      path: '/checkout/succeed',
      name: 'succeed',
      component: Succeed
    },
  ]
})

export default router
