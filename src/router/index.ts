import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'
import UserDetail from '@/pages/UserDetail.vue'
import Presensi from '@/pages/Presensi.vue'
import Laporan from '@/pages/Laporan.vue'
import ManajemenUser from '@/pages/ManajemenUser.vue'
import ManajemenRole from '@/pages/ManajemenRole.vue'
import ManajemenPermission from '@/pages/ManajemenPermission.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/users/:id', component: UserDetail, meta: { requiresAuth: true } },
  { path: '/presensi', component: Presensi, meta: { requiresAuth: true } },
  { path: '/laporan', component: Laporan, meta: { requiresAuth: true } },
  { path: '/manajemen-user', component: ManajemenUser, meta: { requiresAuth: true } },
  { path: '/manajemen-role', component: ManajemenRole, meta: { requiresAuth: true } },
  { path: '/manajemen-permission', component: ManajemenPermission, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
