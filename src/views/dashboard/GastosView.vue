<template>
    <div>
        <h1>gastos</h1>
        {{ token }}
        <button @click="getGastos">getGastos</button>

        <div>
            <ul>
                <li v-for="gasto in gastos" :key="gasto.id"> {{ gasto.name }} - {{ gasto.value }} - {{ gasto.createdAt }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const token = localStorage.getItem('token');
const gastos = ref([]);

onMounted(() => {
    getGastos();
});

const getGastos = async () => {

    if (!token) {
        return;
    }

    if (!gastos.value.length) {
        const response = await axios.get('http://localhost:3000/despesa', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        response.data.map((gasto) => {
            gastos.value.push(gasto);
        });
    
        console.log(response.data);
    }

};

</script>