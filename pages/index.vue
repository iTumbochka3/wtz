<template>
    <BaseProduct v-for="item in productList" :key="item.id" :id="item.id" :image="item.image" />
</template>

<script setup lang="ts">
// import { useProductStore } from '~~/stores/product';

// const productStore = useProductStore();
// let productList = productStore.getProducts;
let productList = [];
</script>