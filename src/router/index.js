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
import PenerimaPorsiWaris from '@/views/PenerimaPorsiWaris.vue'
import MeninggalnyaAhliWarisSebelumDibagikan from '@/views/MeninggalnyaAhliWarisSebelumDibagikan.vue'
import PorsiWarisanAntaraKakekdanSaudara from '@/views/PorsiWarisanAntaraKakekdanSaudara.vue'
import ProgramKelasDasarIlmuWaris1A from '@/views/ProgramKelasDasarIlmuWaris1A.vue'

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
    },
    {
      path: '/checkout/penerima-porsi-waris',
      name: 'penerima-porsi-waris',
      component: PenerimaPorsiWaris
    },
    {
      path: '/checkout/meninggalnya-ahli-waris-',
      name: 'meninggalnya-ahli-waris-',
      component: MeninggalnyaAhliWarisSebelumDibagikan
    },
    {
      path: '/checkout/porsi-waris-antara-kakek-dan-saudara',
      name: 'porsi-waris-antara-kakek-dan-saudara',
      component: PorsiWarisanAntaraKakekdanSaudara
    },
    {
      path: '/checkout/PKDIW-1A',
      name: 'PKDIW-1A',
      component: ProgramKelasDasarIlmuWaris1A
    },
  ]
})
export default router
