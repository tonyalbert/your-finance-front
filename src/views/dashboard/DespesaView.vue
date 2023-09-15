<template>
    <TheNav />
    <section class="px-8 py-8">
        <div class="grid">
            <div>
                <TopPage titulo="Despesas" :valorTotal="-valorTotal"/>

                <div class="py-8">
                    <BarChart :gastos="[30, 90, 30, 40, 20, 60, 70, 80, 50, 100, 90, 80]"/>
                </div>

                <ul>
                    <li v-for="gasto in gastos" :key="gasto.id">{{ gasto.name }} - R$ {{ gasto.value }} 
                    <button @click="excluir(gasto.id)">excluir</button>
                    </li>
                </ul>

            </div>
        </div>
    </section>

    <ButtomAdicionar />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TheNav from '../../components/shared/TheNav.vue';
import TopPage from '../../components/shared/TopPage.vue';
import ButtomAdicionar from '../../components/shared/ButtomAdicionar.vue';
import BarChart from '../../components/shared/BarChart.vue';

const token = localStorage.getItem('token');
const gastos = ref([]);
const valorTotal = ref(0);

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
            valorTotal.value += gasto.value;
            gastos.value.push(gasto);
        });
    
        console.log(response.data);
    }

};

const excluir = async (id) => {
    const response = await axios.delete(`http://localhost:3000/despesa/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });

    gastos.value = gastos.value.filter((gasto) => gasto.id !== id);

};

</script>