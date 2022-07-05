<template>
    <div class="custom-footer">
        <div></div>
        <v-pagination v-model="page" :length="6"></v-pagination>
        <div class="cart-block">
            <div>{{ sum }} руб.</div>
            <v-icon small>
                mdi-cart
            </v-icon>
        </div>
    </div>
</template>

<script setup lang="ts">
let page = ref(1);
let sum = ref(0);
</script>

<style scoped lang="scss">
@import "../assets/footer.scss";
</style>