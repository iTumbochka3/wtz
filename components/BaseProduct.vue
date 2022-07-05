<template>
    <v-card class="product-card">
        <v-card-title>
            <v-avatar color="primary" size="48">JM</v-avatar>
            <div class="user-info">
                <div class="user-info__name">Jason Mowry</div>
                <div class="user-info__tag">@jason_mowry_photo</div>
            </div>
        </v-card-title>
        <v-img :src="product.imageUrl"></v-img>
        <v-card-actions>
            <div>
                <v-icon small @click="plus">
                    mdi-plus
                </v-icon>
                <v-icon small @click="minus">
                    mdi-minus
                </v-icon>
                {{ counter }}
            </div>
            <div>
                {{ product.price }} руб.
            </div>
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