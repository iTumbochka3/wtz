<template>
    <div class="galleryDiv">
        <BaseProduct v-for="item in productList" :key="item.id" :product="item" />
    </div>
</template>

<script setup lang="ts">
import { Product } from '@/constants';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: '1kwxDz0xnLSCT3Chy0DMNIX__ucKl7BlVFiWDgEULZ0',
});

let currentPage = ref(1);
const perPage = 12;
let productList: Product[] = reactive([]);

onMounted(() => {
    getPhotos();
});

async function getPhotos() {
    await unsplash.photos.list({ page: currentPage.value, perPage: perPage })
        .then((result) => {
            if (result.status === 200) {
                console.log('response', result.response);
                result.response.results.forEach((item) => {
                    productList.push(new Product(item.id, item.urls.regular, item.user));
                })
                console.log('productList', productList);
            }
        })
        .catch((error) => { console.log('error', error); });
};

</script>

<style scoped lang="scss">
@import "../assets/gallery.scss";
</style>