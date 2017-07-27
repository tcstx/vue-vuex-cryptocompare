import Vue from 'vue'
import Router from 'vue-router'
import CryptoTable from '@/components/CryptoTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CryptoTable',
      component: CryptoTable
    }
  ]
})
