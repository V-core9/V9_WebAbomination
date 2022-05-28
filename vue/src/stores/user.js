// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';
import axios from 'axios';


/**
 * Simulate a login
 * @param {string} email
 * @param {string} password
 */
async function apiLogin(email, password) {
  return await axios({
    method: 'post',
    url: '/api/auth/login',
    data: { email, password },
    headers: {
      'Content-Type': 'application/json'
    }
  });
}




export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    email: '',
    isAdmin: true,
  }),

  actions: {
    logout() {
      this.$patch({
        email: '',
        isAdmin: false,
      });

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} email
     * @param {string} password
     */
    async login(email, password) {
      const userData = await apiLogin(email, password);

      this.$patch({
        email: email,
        ...userData,
      });
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
