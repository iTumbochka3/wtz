<template>
    <div class="gallery-block">
        <BaseProduct v-for="product in store.productList" :key="product.id" :product="product" />
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~~/stores/product';

const store = useProductStore();

watchEffect(() => {
    store.getProducts();
});

</script>