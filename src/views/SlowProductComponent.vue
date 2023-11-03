<template>
  <section class="product">
    <main v-if="productData">
      <img class="product__img" :alt="productData.title" :src="productData.images[0]">
      <div class="product__wrapper">
        <h1 class="product__title">{{ productData.title }} | {{ productData.price }}$</h1>
        <p class="product__description">{{ productData.description }}</p>
      </div>
    </main>
    <div class="product__loader" v-else>
      Loading...
    </div>
  </section>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'SlowProductComponent',
  data () {
    console.log(_) // lodash is just to simulate as if this component were big size
    return {
      key: _,
      productData: null
    }
  },
  async created () {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch(`https://dummyjson.com/products/${this.$route.params.id}`)
    this.productData = await response.json()
  }
}
</script>

<style scoped lang="scss">
.product {
  position: relative;
  height: 300px;
  display: flex;

  main {
    display: flex;
    width: 100%;
  }

  &__wrapper {
    backdrop-filter: brightness(0.5);
    color: #fff;
    height: fit-content;
    align-self: flex-end;
    width: 100%;
  }

  &__img {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: -1;
    object-fit: cover;
    object-position: left;
  }

  &__title {
    //
  }

  &__description {
    //
  }

  &__loader {
    margin: auto;
  }
}
</style>
