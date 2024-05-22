import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null,
    sidebarOpen: false // 사이드바 상태 추가
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
    },
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebar(state, isOpen) {
      state.sidebarOpen = isOpen;
    }
  },
  actions: {
    login({ commit }, user) {
      commit('setUser', user);
    },
    logout({ commit }) {
      commit('clearUser');
    },
    async initializeStore({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:5000/protected', {
            headers: { 'x-access-token': token }
          });
          commit('setUser', response.data.id);
        } catch (error) {
          console.error('Failed to verify token', error);
          localStorage.removeItem('token');
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
    isSidebarOpen: state => state.sidebarOpen // 사이드바 상태 게터 추가
  }
});
