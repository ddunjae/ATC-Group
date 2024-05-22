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
          <u><strong>{{ user }}</strong></u>
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
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0078d4;
  padding: 0;
  z-index: 1000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-bottom: 1px solid #0078d4;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  margin-left: 20px; /* 왼쪽 끝에서 20px 떨어지게 설정 */
  font-size: 24px;
  font-weight: bold;
}

.logo-link {
  color: white;
  text-decoration: none;
}

.nav-center {
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
}

.nav-right {
  display: flex;
  align-items: center;
  color: white;
  margin-right: 20px; /* 오른쪽 끝에서 20px 떨어지게 설정 */
}

.nav-center a, .nav-right a {
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link {
  width: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logout-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-left: 20px;
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

/* 반응형 디자인을 위한 미디어 쿼리 */
@media (max-width: 1200px) {
  .logo {
    margin-left: 50px; /* 화면이 작아지면 왼쪽 여백 감소 */
  }
  
  .nav-right {
    margin-right: 50px; /* 화면이 작아지면 오른쪽 여백 감소 */
  }
}

@media (max-width: 768px) {
  .logo {
    margin-left: 20px; /* 화면이 더 작아지면 왼쪽 여백 더 감소 */
  }

  .nav-right {
    margin-right: 20px; /* 화면이 더 작아지면 오른쪽 여백 더 감소 */
  }

  .nav-center {
    display: none; /* 작은 화면에서는 중앙 내비게이션 숨김 */
  }
}

@media (max-width: 480px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  .logo {
    margin-left: 0;
    margin-bottom: 10px;
  }

  .nav-right {
    margin-right: 0;
  }
}
</style>
