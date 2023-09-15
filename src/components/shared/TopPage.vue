<template>
    <div class="flex justify-between">
        <div class="flex flex-col space-y-2">
            <h1 class="font-bold text-4xl">{{ titulo }}</h1>
            <span class="text-gray-500">01 - 25 March, 2020</span>
        </div>
        <div class="flex flex-col space-y-2" >
            <p class="text-right text-gray-500 font-semibold">Total</p>
            <span class="font-bold text-3xl text-red-700">{{ valorTotal }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

defineProps({
    titulo: String,
    valorTotal: Number
});

</script>