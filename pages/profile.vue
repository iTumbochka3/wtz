<template>
    <v-card v-if="state.user" class="user-card mx-auto my-12">
        <v-img width="128" :src="state.user.profile_image.large"></v-img>
        <v-card-title>{{ state.user.name }}</v-card-title>
        <v-card-subtitle>
            Location: {{ state.user.location }}
        </v-card-subtitle>
        <v-card-text>
            <div class="text-subtitle-1 mb-4">
                {{ state.user.bio }}
            </div>
            <div v-for="item in state.user.social" :key="item">
                {{ item }}
            </div>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { useProductStore } from '~~/stores/product';

const route = useRoute();
const store = useProductStore();
const state = reactive({ user: null, });

onMounted(() => {
    if (route.query.username) {
        store.getUser(route.query.username.toString())
            .then((result) => {
                if (result.status === 200) {
                    state.user = result.response;
                }
            })
            .catch((error) => { console.log('error', error); });
    }
});
</script>