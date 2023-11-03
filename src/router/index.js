import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-view" */ '../views/HomeView.vue')
  },
  {
    path: '/fast-product/:id',
    name: 'FastProduct',
    component: () => import(/* webpackChunkName: "fast-product-component" */ '../views/FastProductComponent.vue'),
    beforeEnter: async (to, from, next) => {
      // we do not want to wait for it
      fetchProductDataParallel(to)
      // this will trigger JS component file to be fetched fetchProductDataParallel with data fetching
      next()
    }
  },
  {
    path: '/slow-product/:id',
    name: 'SlowProduct',
    component: () => import(/* webpackChunkName: "slow-product-component" */ '../views/SlowProductComponent.vue')
  }
]

async function fetchProductDataParallel (to) {
  const response = await fetch(`https://dummyjson.com/products/${to.params.id}`)
  const product = await response.json()
  // wait for the root app to be created
  await store.state.rootAppCreatedPromise
  // start loading image early
  const image = new Image()
  image.src = product.images[0]
  // set the product to the VUEX
  store.commit('SET_PRODUCT_DATA', product)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
