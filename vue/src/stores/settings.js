// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';
import verify from '../utils/verify';

const defaults = () => {
  return {
    fontSize: 'M',
    mainColor: '#41b883',
    window: {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio
    },
    theme: 'light',
    language: 'en',
    inFocus: document.hasFocus() ? true : false,
  };
};

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => (defaults()),

  actions: {

    async reset() {
      this.$patch(defaults());
    },

    async setFontSize(size) {
      if (['S', 'M', 'L'].includes(size)) {
        this.$patch({
          fontSize: size,
        });
      }
    },

    async setMainColor(color) {
      if (await verify.isColor(color)) {
        this.$patch({
          mainColor: color,
        });
      }
    },

    async resize(event) {
      const { innerWidth, innerHeight, devicePixelRatio } = event.target;
      this.$patch({
        window: {
          innerWidth,
          innerHeight,
          devicePixelRatio
        }
      });
    },


    async setFocus(value) {
      this.$patch({
        inFocus: value
      });
    }
  },
});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot));
}
