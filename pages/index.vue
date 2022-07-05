<template>
    <div class="galleryDiv">
        <BaseProduct v-for="product in productList" :key="product.id" :product="product" />
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/constants';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: '1kwxDz0xnLSCT3Chy0DMNIX__ucKl7BlVFiWDgEULZ0',
});

let currentPage = ref(1);
const perPage = 12;
let productList: IProduct[] = reactive([]);

onMounted(() => {
    getPhotos();
});

function generatePrice(): number {
    const minPrice = 1000;
    const maxPrice = 60000;
    return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
};

async function getPhotos() {
    await unsplash.photos.list({ page: currentPage.value, perPage: perPage })
        .then((result) => {
            if (result.status === 200) {
                result.response.results.forEach((item) => {
                    productList.push({ ...item, price: generatePrice() });
                })
            }
        })
        .catch((error) => { console.log('error', error); });
};

</script>

<style scoped lang="scss">
@import "../assets/gallery.scss";
</style>