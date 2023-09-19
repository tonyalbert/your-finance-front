import { defineStore } from 'pinia'
import axios from 'axios'

export const userStore = defineStore('user', {
    state: () => ({
      loggedIn: true,
      teste: 'teste'
    }),
    actions: {
      logIn(email, senha) {
        axios.post('http://localhost:3000/auth/login', {
            email: email.toLowerCase(),
            password: senha
        }).then((response) => {
            const token = response.data.access_token;
            this.loggedIn = true;
            if (token) {
                localStorage.setItem('token', token);
                console.log(token);
                window.location.href = '/dashboard/gastos';
                return
            }
    
            dadosInvalidos.value = true;
            
        }).catch((error) => {
            dadosInvalidos.value = true;
            console.log(error);
        })
      }
    }
})