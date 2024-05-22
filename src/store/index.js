import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    role: null,
    sidebarOpen: false // 사이드바 상태 추가
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setRole(state, role) {
      state.role = role;
    },
    clearUser(state) {
      state.user = null;
      state.role = null;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebar(state, isOpen) {
      state.sidebarOpen = isOpen;
    }
  },
  actions: {
    login({ commit }, { user, role }) {
      commit('setUser', user);
      commit('setRole', role);
    },
    logout({ commit }) {
      commit('clearUser');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
    async initializeStore({ commit }) {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/protected', {
            headers: { 'x-access-token': token }
          });
          commit('setUser', response.data.id);
          commit('setRole', role);
        } catch (error) {
          console.error('Failed to verify token', error);
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          commit('clearUser');
        }
      }
    },
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    },
    setSidebar({ commit }, isOpen) {
      commit('setSidebar', isOpen);
    }
  },
  getters: {
    isLoggedIn: state => !!state.user,
    user: state => state.user,
    role: state => state.role,
    isSidebarOpen: state => state.sidebarOpen // 사이드바 상태 게터 추가
  }
});
