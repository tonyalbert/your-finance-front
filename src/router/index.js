import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import CadastroView from '../views/cadastro/CadastroView.vue'
import loginView from '../views/login/loginView.vue'
import DespesaView from '../views/dashboard/DespesaView.vue'
import { userStore } from '../utils/Auth.js'

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
      component: DespesaView,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isLogged = userStore().loggedIn
  
  if (to.meta.requiresAuth && !isLogged) {
      if (to.name !== 'login') {
          next({ name: 'login' });
      } else {
          next();
      }
  } else {
      next();
  }
});

export default router
