<template>
  <div id="app">
    <LoadingSpinner v-if="isLoading" />
    <router-view @loading="setLoading"></router-view>
  </div>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner.vue';

export default {
  name: 'App',
  components: {
    LoadingSpinner
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    setLoading(loading) {
      this.isLoading = loading;
    }
  }
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
