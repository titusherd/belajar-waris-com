import { createRouter, createWebHistory } from 'vue-router'
import BedahWaris from '../views/BedahWaris.vue'
import Pendahuluan from '../views/Pendahuluan.vue'
import Hibah from '../views/Hibah.vue'
import Succeed from '@/views/Succeed.vue'
import Kompilasi from '@/views/Kompilasi.vue'
import Penerima from '@/views/Penerima.vue'
import HitungWaris from '@/views/HitungWaris.vue'
import WasiatUntukAhliWaris from '@/views/WasiatUntukAhliWaris.vue'
import WarisanBagiAnakDalamKandungan from '@/views/WarisanBagiAnakDalamKandungan.vue'
import SebabTidakMendapatWarisan from '@/views/SebabTidakMendapatWarisan.vue'
import CaraMengembalikanSisaHarta from '@/views/CaraMengembalikanSisaHarta.vue'

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
    },
    {
      path: '/checkout/wasiat-untuk-ahli-waris',
      name: 'wasiat-untuk-ahli-waris',
      component: WasiatUntukAhliWaris
    },
    {
      path: '/checkout/warisan-bagi-anak-dalam-kandungan',
      name: 'warisan-bagi-anak-dalam-kandungan',
      component: WarisanBagiAnakDalamKandungan
    },
    {
      path: '/checkout/sebab-tidak-mendapatkan-warisan',
      name: 'sebab-tidak-mendapatkan-warisan',
      component: SebabTidakMendapatWarisan
    },
    {
      path: '/checkout/cara-mengembalikan-sisa-harta',
      name: 'cara-mengembalikan-sisa-harta',
      component: CaraMengembalikanSisaHarta
    }

    
  ]
})
export default router
