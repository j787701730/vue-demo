<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.demo-carousel{
  background: #fff;
  height: 300px;
}
.demo-carousel img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.count {
  font-size: 18px;
  font-weight: bold;
}
</style>
