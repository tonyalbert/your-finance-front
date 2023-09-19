<template>

    <section class="flex flex-col p-8 h-screen items-center justify-center gap-8">


            <div class="flex flex-col gap-2">
                <h1 class="font-bold text-3xl text-light-primary dark:text-white">Criar conta</h1>
                <p>Crie uma conta conta para acessar as funcionalidades de <span class="text-light-primary dark:text-white font-bold">Your Finance!</span></p>
            </div>

            <form class="flex flex-col gap-4" @submit.prevent>

                <div>
                    <label for="email" class="font-semibold">Email</label>
                    <input v-model="emailInput" type="text" name="email" class="w-full border border-light-primary py-3 px-6 rounded-xl focus:border-2 focus:outline-none focus:border-primary">
                </div>

                <div>
                    <label for="nome" class="font-semibold">Nome</label>
                    <input v-model="nomeInput" type="text" name="nome" class="w-full border border-light-primary py-3 px-6 rounded-xl focus:border-2 focus:outline-none focus:border-primary">
                </div>

                <div>
                    <label for="senha" class="font-semibold">Senha</label>
                    <input v-model="senhaInput" type="password" name="senha" class="w-full border border-light-primary py-3 px-6 rounded-xl focus:border-2 focus:outline-none focus:border-primary">
                </div>

                <span v-show="messagemCamposNaoPreenchidos" class="text-red-500 font-semibold">Preencha todos os campos</span>
                <span v-show="emailJaCadastrado" class="text-red-500 font-semibold">{{ mensagemEmailCadastrado }}</span>

                <button @click="fazerCadastro" class="mt-10 block text-center bg-light-primary text-white font-bold py-4 px-4 rounded-xl">
                    Criar
                </button>

            </form>

            <p>Já tem ume conta? <a href="/login" class="text-light-primary dark:text-white w-full text-center">Login</a></p>
    </section>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import voltar from '../../assets/images/voltar.svg';

const emailInput = ref('');
const nomeInput = ref('');
const senhaInput = ref('');
const messagemCamposNaoPreenchidos = ref(false);
const mensagemEmailCadastrado = ref('');
const emailJaCadastrado = ref(false);

const fazerCadastro = () => {

    if (!emailInput.value || !nomeInput.value || !senhaInput.value) {
        messagemCamposNaoPreenchidos.value = true;
        return;
    }

    axios.post('http://localhost:3000/user', {
        email: emailInput.value,
        name: nomeInput.value,
        password: senhaInput.value
    }).then((response) => {
        if(response.data.error) {
            mensagemEmailCadastrado.value = response.data.message;
            emailJaCadastrado.value = true;
        } else {
            window.location.href = '/login';
        }
    }).catch((error) => {
        dadosInvalidos.value = true;
        console.log(error);
    })

}

</script>