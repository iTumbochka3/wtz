import { defineStore } from "pinia";
import { IProduct } from "~~/constants";
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: '1kwxDz0xnLSCT3Chy0DMNIX__ucKl7BlVFiWDgEULZ0',
});

export type RootState = {
  productList: IProduct[];
  cartSum: number,
  minPrice: number,
  maxPrice: number,
  page: number,
  perPage: number,
};

export const useProductStore = defineStore({
  id: "productStore",
  state: () => ({
    productList: [],
    cartSum: 0,
    minPrice: 1000,
    maxPrice: 60000,
    page: 1,
    perPage: 12,
  } as RootState),

  actions: {
    async getProducts(): Promise<void> {
      await unsplash.photos.list({ page: this.page, perPage: this.perPage })
        .then((result) => {
          if (result.status === 200) {
            result.response.results.forEach((item) => {
              this.productList.push({ ...item, price: this.generatePrice() });
            })
          }
        })
        .catch((error) => { console.log('error', error); });
    },

    generatePrice(): number {
      return Math.floor(Math.random() * (this.maxPrice - this.minPrice + 1)) + this.minPrice;
    },

    addToCart(price: number): void {
      this.cartSum = this.cartSum + price;
    },

    removeFromCart(price: number): void {
      if (this.cartSum > 0) {
        this.cartSum = this.cartSum - price;
      }
    },
  },
});