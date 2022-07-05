<template>
    <div v-show="isShow" class="footer-block">
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
const route = useRoute();
const isShow = ref(false);

onMounted(() => {
    if(route.path === '/') {
        isShow.value = true;
    }
});

</script>