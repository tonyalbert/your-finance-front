<template>
    <li class="grid grid-cols-5">

        <div class="flex items-center space-x-4 col-span-4">
            <div>
                <div class="flex items-center justify-center w-10 h-10 bg-red-400 rounded-full">
                    <CreditCard v-if="origem == 'cartao'" class="text-white" />
                    <Banknote v-else class="text-white" />
                </div>
            </div>
            <div class="block text-gray-500">
                <p class="font-semibold text-black">{{ nome }}</p>
                <span class="text-sm">{{ data }}</span>
                <span class="text-sm"> - </span>
                <span class="text-sm">{{ descricao }}</span>
            </div>
            <div @click="$emit('excluir', id)" class="text-gray-500 text-sm text-right">{{ acaoName }}</div>

        </div>

        <div class="flex justify-end col-span-1">
            <span class="text-bold">{{ valor }}</span>
        </div>


    </li>
</template>

<script setup>
import { defineProps } from 'vue';
import { CreditCard, Banknote, Pizza } from 'lucide-vue-next';

defineProps({
    nome: String,
    data: String,
    descricao: String,
    valor: String,
    acaoName: String,
    origem: String
})
</script>