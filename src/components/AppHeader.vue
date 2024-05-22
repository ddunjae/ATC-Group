<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <router-link :to="{ name: 'Home' }" class="logo-link">ATC Group</router-link>
      </div>
      <nav class="nav-center">
        <router-link :to="{ name: 'SystemStatus' }" class="nav-link" :class="{ active: $route.name === 'SystemStatus' }">SYSTEM STATUS</router-link>
        <router-link :to="{ name: 'Network' }" class="nav-link" :class="{ active: $route.name === 'Network' }">NETWORK</router-link>
      </nav>
      <div class="nav-right">
        <div v-if="isLoggedIn">
          {{ user }}
          <button @click="handleLogout" class="logout-button">Logout</button>
        </div>
        <router-link v-else :to="{ name: 'Login' }" :class="{ active: $route.name === 'Login' }">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn', 'user'])
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('logout');
      localStorage.removeItem('token');
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: 'Segoe UI';
  src: url('@/assets/fonts/SegoeUI.woff2') format('woff2'),
       url('@/assets/fonts/SegoeUI.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.app-header {
  width: 100%;
  height: 60px; /* 헤더의 높이를 고정 */
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0078d4; /* Azure 색상 */
  padding: 0; /* 헤더의 크기를 키우기 위해 패딩을 제거 */
  z-index: 1000; /* 다른 요소들보다 위에 위치하도록 설정 */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 1px solid #0078d4;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%; /* 부모 요소의 높이를 채우도록 설정 */
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /* 좌우 패딩을 설정하여 여백을 줌 */
}

.logo {
  font-size: 24px; /* 로고 크기를 적당히 설정 */
  font-weight: bold;
}

.logo-link {
  color: white;
  text-decoration: none; /* 밑줄 제거 */
}

.nav-center {
  display: flex;
  gap: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%; /* 부모의 높이를 100%로 설정 */
  align-items: center; /* 세로로 중앙 정렬 */
}

.nav-right {
  margin-left: auto;
  height: 100%; /* 부모의 높이를 100%로 설정 */
  display: flex;
  align-items: center; /* 세로로 중앙 정렬 */
}

.nav-center a, .nav-right a {
  color: white;
  text-decoration: none;
  font-size: 14px; /* 링크의 크기를 적당히 줄임 */
  font-weight: bold;
  padding: 0 15px; /* 좌우 패딩만 유지 */
  height: 100%; /* 부모의 높이를 100%로 설정 */
  display: flex;
  align-items: center; /* 세로로 중앙 정렬 */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link {
  width: 140px; /* 두 링크의 너비를 동일하게 설정 */
  display: flex;
  justify-content: center; /* 텍스트를 수평으로 중앙에 정렬 */
  align-items: center; /* 텍스트를 수직으로 중앙에 정렬 */
}

.logout-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  transition: color 0.3s;
}

.logout-button:hover {
  color: #f0f0f0;
}

.nav-center a:hover, .nav-right a:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.nav-center a.active, .nav-right a.active {
  background-color: white;
  color: #0078d4;
}
</style>