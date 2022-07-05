<template>
    <div class="galleryDiv">
        <BaseProduct v-for="product in productList" :key="product.id" :product="product" />
    </div>
</template>

<script setup lang="ts">
import { IProduct } from '@/constants';
import { useProductStore } from '~~/stores/product';

const store = useProductStore();
const productList: IProduct[] = store.productList;

onMounted(() => {
    store.getProducts();
});

</script>

<style scoped lang="scss">
@import "../assets/gallery.scss";
</style>