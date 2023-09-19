<template>
    <TheNav class="md:hidden"/>
    <section class="px-8 py-8">
        <div class="grid">
            <div>
                <TopPage titulo="Despesas" :valorTotal="-valorTotal" data="12/03/2022"/>

                <div class="py-8">
                    <BarChart :meses="meses" :gastos="[30, 60, 100, 40, 20, 60, 70, 80, 50, 100, 90, 10]"/>
                </div>

                <div class="grid grid-cols-2 pb-8">
                    <div class="flex">
                        <TheSelect :datas="datas"/>
                    </div>
                    <div class="flex justify-end">
                        <div>
                        <select name="select" v-model="origemSelecionada" class="py-2 px-6 outline-none focus:outline-none ring-0 bg-[#D0E4FF] text-gray-700 rounded-lg shadow focus:ring-2">
                            <option 
                            value="null"
                            key="null"
                            >
                                Todos
                            </option>
                            <option 
                                v-for="origem in origens" 
                                :key="origem" :value="origem.id" 
                                class="border-none">{{ origem.name }}
                            </option>
                        </select>
                    </div>
                    </div>
                </div>

                <ul class="flex flex-col w-full space-y-3">
                    <Despesa
                    v-for="gasto in gastos"
                    v-show="gasto.origemId == origemSelecionada || origemSelecionada == 'null'"
                    :key="gasto.id" 
                    :nome="gasto.name"
                    :data="dataFormatada(gasto.createdAt)"
                    :descricao="gasto.description"
                    :valor="'-R$' + gasto.value"
                    :acaoName="'Excluir'"
                    @excluir="excluir(gasto.id)"
                    origem="cartao"
                    />
                    
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
import Despesa from '../../components/shared/Despesa.vue';
import TheSelect from '../../components/shared/input/TheSelect.vue';
import meses from '../../utils/meses';
import Swal from 'sweetalert2'

const token = localStorage.getItem('token');
const gastos = ref([]);
const valorTotal = ref(0);
const datas = ref([
    {
        id: 1,
        name: 'Janeiro'
    },
    {
        id: 2,
        name: 'Fevereiro'
    }
]);
const origens = ref([]);
const origemSelecionada = ref('null');
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

onMounted(() => {
    getGastos();
    GetOrigens();
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

const GetOrigens = async () => {
    const response = await axios.get('http://localhost:3000/origem', {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    console.log(response.data[0].name);

    
    response.data.map((origem) => {
        origens.value.push(origem);
    })

};

const excluir = async (id) => {

    swalWithBootstrapButtons.fire({
    title: 'Tem certeza?',
    text: "Você não poderá reverter isso!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, deletar',
    cancelButtonText: 'Não, cancelar',
    reverseButtons: true
    }).then((result) => {
    if (result.isConfirmed) {

        const response = axios.delete(`http://localhost:3000/despesa/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        gastos.value = gastos.value.filter((gasto) => gasto.id !== id);
        
        swalWithBootstrapButtons.fire(
        'Deletado!',
        'O registro foi deletado.',
        'success'
        )
    } else if (
        result.dismiss === Swal.DismissReason.cancel
    ) {
        swalWithBootstrapButtons.fire(
        'Ação cancelada',
        'Nenhum registro foi deletado',
        'error'
        )
    }
    });

};

const dataFormatada = (data) => {
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR');
    return dataFormatada;
};

</script>

<style>
.btn-success {
    display: inline-block;
    border-radius: 6px;
    padding: 10px;
    background-color: #85eb92;
}

.btn-danger {
    display: inline-block;
    border-radius: 6px;
    padding: 10px;
    background-color: #eb8585;  
}

div:where(.swal2-container) div:where(.swal2-popup) {
    width: 20rem;
}

</style>