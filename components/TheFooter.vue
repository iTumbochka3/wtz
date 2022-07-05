<template>
    <div class="custom-footer">
        <div></div>
        <v-pagination v-model="store.page" :length="6"></v-pagination>
        <div class="cart-block">
            <div>{{ store.cartSum }} руб.</div>
            <v-icon small>
                mdi-cart
            </v-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~~/stores/product';

const store = useProductStore();
</script>

<style scoped lang="scss">
@import "../assets/footer.scss";
</style>