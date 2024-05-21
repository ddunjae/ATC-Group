<template>
  <div>
    <AppHeader :loggedIn="true" />
    <div class="page">
      <h1>App Page 1</h1>
      <p>Welcome to App Page 1</p>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'AppPage1',
  components: {
    AppHeader
  }
};
</script>

<style scoped>
.page {
  padding: 20px;
  margin-top: 60px; /* 헤더 아래에 내용이 오도록 여백 추가 */
}
</style>
