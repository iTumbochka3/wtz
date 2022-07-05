<template>
    <div class="galleryDiv">
        <BaseProduct v-for="item in productList" :key="item.id" :product="item" />
    </div>
</template>

<script setup lang="ts">
import { Product } from '@/constants';

let productList: Product[] = reactive([]);

onMounted(() => {
    for (let i = 1; i < 9; i++) {
        productList.push(new Product(`${i}`, 'https://cdn.vuetifyjs.com/images/cards/cooking.png'));
    }
    send();
});

async function send() {
    await useFetch('https://api.unsplash.com/photos/?client_id=1kwxDz0xnLSCT3Chy0DMNIX__ucKl7BlVFiWDgEULZ0',
        // { headers: {'Authorization': 'Client-ID 1kwxDz0xnLSCT3Chy0DMNIX__ucKl7BlVFiWDgEULZ0'} }
    )
        .then((result) => { console.log('success', result); })
        .catch((error) => { console.log('error', error); });
};

</script>

<style scoped lang="scss">
@import "../assets/gallery.scss";
</style>