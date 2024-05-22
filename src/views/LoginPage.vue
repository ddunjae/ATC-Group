<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="id">ID</label>
          <input type="text" v-model="id" id="id" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: 'LoginPage',
  data() {
    return {
      id: '',
      password: '',
      error: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          id: this.id,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role);
        this.login({ user: this.id, role: response.data.role }); // Vuex 스토어에 사용자 ID와 역할 저장

        if (response.data.role === 'page1') {
          this.$router.push({ name: 'Page1' });
        } else if (response.data.role === 'page2') {
          this.$router.push({ name: 'Page2' });
        } else {
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        this.error = error.response.data.message;
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
}

h2 {
  margin-bottom: 1.5rem;
  color: #0078d4;
  font-size: 30px;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #555;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: #0078d4;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #369970;
}

.error {
  color: red;
  text-align: center;
  margin-top: 1rem;
}
</style>
