import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookListView from '@/view/BookListView.vue'
//import Login from '../views/LoginView.vue'

// routers
const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/BookList',
    name: 'BookList',
    component: BookListView
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
