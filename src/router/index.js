import { createRouter, createWebHistory } from 'vue-router'
import BedahWaris from '../views/BedahWaris.vue'
import Pendahuluan from '../views/Pendahuluan.vue'
import Hibah from '../views/Hibah.vue'
import Succeed from '@/views/Succeed.vue'
import Kompilasi from '@/views/Kompilasi.vue'
import Penerima from '@/views/Penerima.vue'
import HitungWaris from '@/views/HitungWaris.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/checkout/bedahwaris',
      name: 'bedahwaris',
      component: BedahWaris
    },
    {
      path: '/checkout/prinsip-dasar',
      name: 'pendahuluan',
      component: Pendahuluan
    },
    {
      path: '/checkout/hibah',
      name: 'hibah',
      component: Hibah
    },
    {
      path: '/succeed',
      name: 'succeed',
      component: Succeed
    },
    {
      path: '/checkout/khi',
      name: 'kompilasi',
      component: Kompilasi
    },
    {
      path: '/checkout/mengetahui-ahli-waris',
      name: 'penerima',
      component: Penerima
    },
    {
      path: '/checkout/cara-menghitung-waris',
      name: 'menghitung-waris',
      component: HitungWaris
    }
  ]
})
export default router
