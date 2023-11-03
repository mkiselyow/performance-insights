<template>
  <div class="home">
    <h1>Products:</h1>
    <router-link
      v-for="product in productsArray"
      :key="product.id"
      :to="`/fast-product/${product.id}`"
    >
      [Fast] {{ product.title }} | {{ product.price }}$
    </router-link>
    <router-link
      v-for="product in productsArray"
      :key="product.id"
      :to="`/slow-product/${product.id}`"
    >
      [Slow] {{ product.title }} | {{ product.price }}$
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      productsArray: []
    }
  },
  async created () {
    const response = await fetch('https://dummyjson.com/products?limit=10&select=id,title,price')
    this.productsArray = (await response.json()).products
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 30px;
}
</style>
