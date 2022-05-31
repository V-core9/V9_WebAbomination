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

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    email: localStorage.getItem('user.email') || '',
    isAdmin: (localStorage.getItem('user.isAdmin') == '1') ? true : false,
    accessToken: localStorage.getItem('user.accessToken') || '',
    refreshToken: localStorage.getItem('user.refreshToken') || '',
  }),

  actions: {
    logout() {
      this.$patch({
        email: '',
        isAdmin: false,
        accessToken: '',
        refreshToken: '',
      });

      localStorage.removeItem('user.email');
      localStorage.removeItem('user.isAdmin');
      localStorage.removeItem('user.accessToken');
      localStorage.removeItem('user.refreshToken');
      // we could do other stuff like redirecting the user
      router.push('login');
    },

    /**
     * Attempt to login a user
     * @param {string} email
     * @param {string} password
     */
    async login(email, password) {
      const apiResponse = await apiLogin(email, password);
      console.log('LOGIN -> userData :', apiResponse);
      this.$patch({
        email: email,
        ...apiResponse.data,
      });

      localStorage.setItem('user.email', this.email);
      localStorage.setItem('user.isAdmin', this.isAdmin ? '1' : '0');
      localStorage.setItem('user.accessToken', this.accessToken);
      localStorage.setItem('user.refreshToken', this.refreshToken);
      router.push('blog');
    },
  },
});



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
