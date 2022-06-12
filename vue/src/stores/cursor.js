// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia';

const defaults = () => {
  return {
    size: 'M',
    x: 0,
    y: 0,
  };
};

export const useCursorStore = defineStore({
  id: 'cursor',
  state: () => (defaults()),

  actions: {

    async reset() {
      this.$patch(defaults());
    },

    async setSize(size) {
      if (['S', 'M', 'L'].includes(size)) {
        this.$patch({
          size: size,
        });
      }
    },

    async setPosition(x, y) {
      this.$patch({x,y});
    },



  },
});


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCursorStore, import.meta.hot));
}
