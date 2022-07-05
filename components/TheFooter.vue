<template>
    <div v-show="isShow" class="footer-block">
        <div v-if="name !== 'xs'"></div>
        <v-pagination v-model="store.page" :length="store.maxPage" :total-visible="totalVisible"></v-pagination>
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
import { useDisplay } from 'vuetify/lib/framework.mjs';

const store = useProductStore();
const route = useRoute();
const { name } = useDisplay();
const isShow = ref(false);

onMounted(() => {
    if (route.path === '/') {
        isShow.value = true;
    }
});

const totalVisible = computed(() => {
    switch (name.value) {
        case 'xs': return 1
        case 'sm': return 3
        case 'md': return 6
        case 'lg': return 7
        case 'xl': return 8
        case 'xxl': return 9
    }
});

</script>