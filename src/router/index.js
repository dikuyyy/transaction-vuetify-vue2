import Vue from 'vue'
import VueRouter from 'vue-router'
import TransactionPage from "@/views/TransactionPage.vue";
import DetailTransactionPage from "@/views/DetailTransactionPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'transaction-page',
    component: TransactionPage
  },
  {
    path: '/detail/:id',
    name: 'detail-page',
    component: DetailTransactionPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
