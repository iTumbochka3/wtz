<template>
    <v-card class="mx-auto my-12" max-width="380">
        <v-card-title>
            <v-avatar color="primary" size="48"></v-avatar>
        </v-card-title>
        <v-img height="312" :src="image"></v-img>
        <v-card-actions>
            <v-btn text @click="plus">
                -
            </v-btn>
            <v-btn text @click="remove">
                +
            </v-btn>
            {{ counter }}
        </v-card-actions>
    </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
    id: Number,
    image: String,
});

let counter = 0;

function plus(): void {
    console.log('plus');
}
function remove(): void {
    console.log('remove');
}

</script>