import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import CadastroView from '../views/cadastro/CadastroView.vue'
import loginView from '../views/login/loginView.vue'
import DespesaView from '../views/dashboard/DespesaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: CadastroView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/dashboard/gastos',
      name: 'dashboard',
      component: DespesaView
    }
  ]
})

export default router
