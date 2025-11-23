import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import AboutView from '../views/AboutView.vue'
import FrameworkView from '../views/FrameworkView.vue'
import StatusView from '../views/StatusView.vue'
import V1View from '../views/V1View.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/info', name: 'info', component: InfoView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/framework', name: 'framework', component: FrameworkView },
  { path: '/status', name: 'status', component: StatusView },
  { path: '/v1', name: 'v1', component: V1View },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
