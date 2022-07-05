<template>
    <div class="galleryDiv">
        <BaseProduct v-for="item in productList" :key="item.id" :product="item" />
    </div>
</template>

<script setup lang="ts">
import { Product } from '@/constants';

// async function send() {
// await useFetch('https://api.unsplash.com/photos')
// .then((result) => { console.log('success', result); })
// .catch((error) => { console.log('error', error); });
// }

let productList: Product[] = [];
for (let i = 1; i < 9; i++) {
    productList.push(new Product(`${i}`, 'https://cdn.vuetifyjs.com/images/cards/cooking.png'));
}
</script>

<style scoped lang="scss">
@import "../assets/gallery.scss";
</style>