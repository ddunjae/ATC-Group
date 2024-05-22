<template>
    <div>
      <AppHeader />
      <AppSidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  import AppHeader from '@/components/AppHeader.vue';
  import AppSidebar from '@/components/AppSidebar.vue';
  
  export default {
    name: 'Layout',
    components: {
      AppHeader,
      AppSidebar
    }
  };
  </script>
  
  <style scoped>
  .content {
    margin-left: 250px; /* 사이드바 너비만큼 왼쪽 마진 추가 */
    padding: 20px;
    margin-top: 60px; /* 헤더 높이만큼 위쪽 마진 추가 */
  }
  </style>
  