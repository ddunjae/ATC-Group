<template>
    <div>
      <AppHeader :loggedIn="true" />
      <AppSidebar />
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from './AppHeader.vue';
  import AppSidebar from './AppSidebar.vue';
  
  export default {
    name: 'MainLayout',
    components: {
      AppHeader,
      AppSidebar
    }
  };
  </script>
  
  <style scoped>
  .content {
    margin-left: 250px; /* 사이드바 너비만큼 왼쪽 여백 추가 */
    margin-top: 60px; /* 헤더 높이만큼 위쪽 여백 추가 */
    padding: 20px;
  }
  </style>
  