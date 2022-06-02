// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';
import axios from 'axios';
import router from '../router';
import verify from '../utils/verify';

/**
 * Simulate a login
 * @param {string} email
 * @param {string} password
 */
async function apiLogin(email, password) {
  if (await verify('login', email, password)) {
    return await axios({
      method: 'post',
      url: '/api/auth/login',
      data: { email, password },
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  return {};
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    email: localStorage.getItem('auth.email') || '',
    isAdmin: (localStorage.getItem('auth.isAdmin') == '1') ? true : false,
    accessToken: localStorage.getItem('auth.accessToken') || '',
    refreshToken: localStorage.getItem('auth.refreshToken') || '',
  }),

  actions: {
    logout() {
      this.$patch({
        email: '',
        isAdmin: false,
        accessToken: '',
        refreshToken: '',
      });

      localStorage.removeItem('auth.email');
      localStorage.removeItem('auth.isAdmin');
      localStorage.removeItem('auth.accessToken');
      localStorage.removeItem('auth.refreshToken');
      // we could do other stuff like redirecting the auth
      router.push('login');
    },

    /**
     * Attempt to authenticate the user
     * @param {string} email
     * @param {string} password
     */
    async login(email, password) {
      const apiResponse = await apiLogin(email, password);
      console.log('LOGIN -> authData :', apiResponse);
      this.$patch({
        email: email,
        ...apiResponse.data,
      });

      localStorage.setItem('auth.email', this.email);
      localStorage.setItem('auth.isAdmin', this.isAdmin ? '1' : '0');
      localStorage.setItem('auth.accessToken', this.accessToken);
      localStorage.setItem('auth.refreshToken', this.refreshToken);
      router.push('blog');
    },
  },
});



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
