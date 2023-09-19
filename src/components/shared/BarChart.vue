<template>
    <div class="w-full h-16 flex justify-between items-end">
        <div 
        v-for="(mes, index) in meses" 
        :key="mes.id" 
        :title="mes.nome" 
        :style="{ height: `${gastos[index]}%` }"
        class="w-5 bg-[#D0E4FF] rounded-xl ">
        </div>
    </div>

</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  gastos: Array,
  meses: Array 
});

</script>