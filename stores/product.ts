import { defineStore } from "pinia";
import { IProduct } from "~~/constants";
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: '1kwxDz0xnLSCT3Chy0DMNIX__ucKl7BlVFiWDgEULZ0',
});

interface ICartItem {
  price: number,
  count: number,
};

export type RootState = {
  productList: IProduct[];
  cartList: Map<string, ICartItem>,
  cartSum: number,
  minPrice: number,
  maxPrice: number,
  page: number,
  perPage: number,
  maxPage: number,
};

export const useProductStore = defineStore({
  id: "productStore",
  state: () => ({
    productList: [],
    cartList: new Map,
    cartSum: 0,
    minPrice: 1000,
    maxPrice: 60000,
    page: 1,
    perPage: 12,
    maxPage: 1,
  } as RootState),

  actions: {
    async getProducts(): Promise<void> {
      await unsplash.photos.list({ page: this.page, perPage: this.perPage })
        .then((result) => {
          if (result.status === 200) {
            this.maxPage = Math.ceil(result.response.total / this.perPage);
            this.productList = result.response.results.map((item) => ({ ...item, price: this.generatePrice() }));
          }
        })
        .catch((error) => { console.log('error', error); });
    },

    async getUser(username: string) {
      return await unsplash.users.get({ username: username });
    },

    generatePrice(): number {
      return Math.floor(Math.random() * (this.maxPrice - this.minPrice + 1)) + this.minPrice;
    },

    addToCart(id: string, price: number, count: number): void {
      this.cartSum = this.cartSum + price;
      this.cartList.set(id, { price: price, count: count });
    },

    removeFromCart(id: string, price: number, count: number): void {
      if (this.cartSum > 0 && this.cartList.has(id)) {
        this.cartSum = this.cartSum - price;
        if (count > 0) {
          this.cartList.set(id, { price: price, count: count });
        } else {
          this.cartList.delete(id);
        }
      }
    },
  },
});