<template>
    <div>
        <select name="select" class="py-2 px-6 outline-none focus:outline-none ring-0 bg-[#D0E4FF] text-gray-700 rounded-lg shadow focus:ring-2">
            <option v-for="data in datas" @change="setNewValue()" :key="data" :value="data.id" class="border-none">{{ data.name }}</option>
        </select>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    datas: Array,
})


</script>