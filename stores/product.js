import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => {
    return {
      products: [
        { id: 1, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { id: 2, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { id: 3, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { id: 4, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { id: 5, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { id: 6, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
        { id: 7, image: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' },
      ]
    }
  },
  actions: {
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    }
  },
})