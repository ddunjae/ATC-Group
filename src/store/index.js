import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearUser(state) {
      state.user = null;
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
    }
  },
  getters: {
    isLoggedIn: state => !!state.user,
    user: state => state.user
  }
});
