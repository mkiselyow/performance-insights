<template>
  <section class="product">
    <main v-if="$store.state.productData">
      <img class="product__img" :alt="$store.state.productData.title" :src="$store.state.productData.images[0]">
      <div class="product__wrapper">
        <h1 class="product__title">{{ $store.state.productData.title }} | {{ $store.state.productData.price }}$</h1>
        <p class="product__description">{{ $store.state.productData.description }}</p>
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
  name: 'FastProductComponent',
  data () {
    console.log(_) // lodash is just to simulate as if this component were big size
    return {
      key: _
    }
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
