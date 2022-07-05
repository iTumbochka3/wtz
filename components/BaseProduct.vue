<template>
    <v-card class="product-card">
        <v-card-text>
            <v-avatar color="primary" size="48" :src="product.user?.profile_image ? product.user?.profile_image.small : null"></v-avatar>
            <div class="user-info">
                <div class="user-info__name">{{ product.user.name }}</div>
                <div class="user-info__tag">{{ product.user.instagram_username }}</div>
            </div>
        </v-card-text>
        <v-img :src="product.imageUrl"></v-img>
        <v-card-actions>
            <v-icon small @click="plus">mdi-plus</v-icon>
            <v-icon small @click="minus">mdi-minus</v-icon>
            <div class="product__counter">{{ counter }}</div>
            <v-spacer />
            <div class="product__price">{{ product.price }} руб.</div>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">

const props = defineProps({
    product: { type: Object },
});

let counter = ref(0);

function plus(): void {
    counter.value++;
}
function minus(): void {
    if (counter.value > 0) {
        counter.value--;
    }
}
</script>

<style scoped lang="scss">
@import "../assets/product-card.scss";
</style>