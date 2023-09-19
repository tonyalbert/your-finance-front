<template>

    <section class="flex flex-col p-8 h-screen items-center justify-center gap-8">

            <div class="flex flex-col gap-2">
                <h1 class="font-bold text-3xl text-light-primary dark:text-white">Login</h1>
                <p>Faça login para ter acesso as funcionalidades de <span class="text-light-primary dark:text-white font-bold">Your Finance!</span></p>
            </div>

            <form class="flex flex-col gap-4" @submit.prevent>

                <div>
                    <label for="email" class="font-semibold">Email</label>
                    <input v-model="emailInput" @input="validateEmail" type="text" name="email" class="w-full border border-light-primary py-3 px-6 rounded-xl focus:border-2 focus:outline-none focus:border-primary">
                </div>

                <div>
                    <label for="senha" class="font-semibold">Senha</label>
                    <input v-model="senhaInput" type="password" name="senha" class="w-full border border-light-primary py-3 px-6 rounded-xl focus:border-2 focus:outline-none focus:border-primary">
                </div>

                <span v-show="dadosInvalidos" class="error">E-mail ou senha incorretos</span>

                <button @click="fazerCadastro" class="mt-10 block text-center bg-light-primary text-white font-bold py-4 px-4 rounded-xl">
                    Login
                </button>

            </form>

            <p>Não tem uma conta?  <a href="/cadastro" class="text-light-primary dark:text-white w-full text-center">Login</a></p>
    </section>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import voltar from '../../assets/images/voltar.svg';
import { userStore } from '../../utils/Auth';

const emailInput = ref('');
const senhaInput = ref('');
const dadosInvalidos = ref(false);
const main = userStore();

const emailToLowerCase = (email) => {
    return email.toLowerCase();
}

const fazerCadastro = () => {

    main.logIn(emailInput.value, senhaInput.value);
    console.log(main.loggedIn)

    setInterval(() => {
        console.log(main.loggedIn)  
    }, 1000)
}

</script>