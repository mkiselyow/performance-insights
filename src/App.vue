<template>
  <div id="app">
    <nav class="header">
      <router-link to="/">Products</router-link>
      <a href="#">Header Link #1</a>
      <a href="#">Header Link #2</a>
      <a href="#">Header Link #3</a>
      <a href="#">Header Link #4</a>
    </nav>
    <router-view/>
    <div class="footer">
      <a href="#">Footer Link #1</a>
      <a href="#">Footer Link #2</a>
      <a href="#">Footer Link #3</a>
      <a href="#">Footer Link #4</a>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header, .footer {
  display: flex;
  flex-direction: column;
  background-color: bisque;
  min-height: 100px;
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}

body, h1 {
  margin: 0;
}
</style>
<script setup>
</script>
