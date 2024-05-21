<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@font-face {
  font-family: 'Segoe UI';
  src: url('@/assets/fonts/SegoeUI.woff2') format('woff2'),
       url('@/assets/fonts/SegoeUI.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
