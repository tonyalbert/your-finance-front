<template>
    <div class="w-full h-16 flex justify-between items-end">
        <div 
        v-for="(mes, index) in Meses" 
        :key="mes" 
        :title="mes" 
        :style="{ height: `${gastos[index]}%` }"
        class="w-5 bg-[#D0E4FF] rounded-xl ">
        </div>
    </div>

</template>

<script setup>
import { ref, defineProps } from 'vue';

const Meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const props = defineProps({
  gastos: Array, // Um array de valores de gastos para cada mês
});

</script>