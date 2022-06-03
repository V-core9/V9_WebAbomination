// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';


export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    fontSize: localStorage.getItem('settings.fontSize') || '15px',
  }),

  actions: {
    reset() {
      this.$patch({
        fontSize: '15px',
      });

      localStorage.removeItem('settings.fontSize');
    },

  },
});



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot));
}
