<template>
  <div>
    <AppHeader :loggedIn="true" />
    <AppSidebar />
    <div class="main-content">
      <p>Main Page Content is hidden</p>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue';


export default {
  name: 'MainPage',
  components: {
    AppHeader,
  }
};
</script>

<style scoped>
.main-content {
  display: none;
}
</style>
