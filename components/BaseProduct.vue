<template>
    <v-card class="product-card">
        <v-card-text class="product-card__content">
            <v-avatar size="48">
                <img :src="photoObject.user.profile_image.medium" />
            </v-avatar>
            <div class="user-info" @click="showProfile(photoObject.user.username)">
                <div class="user-info__name">{{ photoObject.user.name }}</div>
                <div class="user-info__tag">{{ photoObject.user.instagram_username }}</div>
            </div>
        </v-card-text>
        <v-img class="product-card__image" :src="photoObject.urls.regular" />
        <v-spacer />
        <v-card-actions>
            <v-icon small @click="addProduct">mdi-plus</v-icon>
            <v-icon small @click="removeProduct">mdi-minus</v-icon>
            <div class="product-card__counter">{{ counter }}</div>
            <v-spacer />
            <div class="product-card__price">{{ photoObject.price }} руб.</div>
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
import { IProduct } from '~~/constants';
import { useProductStore } from '~~/stores/product';

const store = useProductStore();
const router = useRouter();

const props = defineProps({
    product: { type: Object },
});

let counter = ref(0);
const photoObject = props.product as IProduct;

onMounted(() => {
    counter.value = store.cartList.get(photoObject.id) ? store.cartList.get(photoObject.id).count : 0;
});

function addProduct(): void {
    counter.value++;
    store.addToCart(photoObject.id, photoObject.price, counter.value);
};

function removeProduct(): void {
    if (counter.value > 0) {
        counter.value--;
        store.removeFromCart(photoObject.id, photoObject.price, counter.value);
    }
};

function showProfile(username: string) {
    const routeData = router.resolve({ path: '/profile', query: { username: username } });
    window.open(routeData.href, '_blank');
}

</script>