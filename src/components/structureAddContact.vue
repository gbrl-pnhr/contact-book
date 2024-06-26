<script lang="ts">
import type { contactBook } from '@/services/contacts/typesContacts';
import HeaderContactBook from './headerContactBook.vue';
import axios from 'axios';

export default{
    data(){
        return{
            contactData: {
                name:'',
                id: 0,
                phoneNumber: "",
                email: ""
            },
            contacts: [] as contactBook[]
        }
    },
    mounted(){
        axios.get('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook')
           .then(response => this.contacts = response.data)
    },
    components:{
        HeaderContactBook
    },
    methods:{
        createNewContact(){
            if(this.verifyInputs(this.contactData.phoneNumber, this.contactData.email)){
                this.contactData.id = (this.contactData.id + 1);
                axios.post('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook', this.contactData)
                    .then((response)=>console.log(response)) 
                    .catch(error=>{console.error(error)})  
            }else{
                alert("Por favor, preencha todos os campos corretamente");
            } 
        },
        verifyInputs(phone: string, email: string){
            if(phone === '' || email === ''){
                return false;
            }else{
                if(this.validateEmail(email) && this.validatePhone(phone)){
                    return true
                }else{
                    return false;
                }
                
            }
        },
        validateEmail(email: string){
            if(email.includes('@')){
                let validateEmail = email.split('@');
                let validateDominion = validateEmail[1].split('.');
                if(email.includes(' ') || validateEmail[0].length === 0 || validateDominion.length < 2 || validateDominion[0].length === 0 || validateDominion[1] !== "com"){
                    return false;
                }else{
                    return true;
                }
            }else{
                return false;
            }
        },
        validatePhone(phone: string){
            let verifyPhone = new RegExp('^\\([1-9]{2}\\)((9[0-9]{4}-[0-9]{4})|9[0-9]{8})$');
            if(verifyPhone.test(phone)){
                return true;
            }else{
                return false;
            }
        }
    }
}
</script>

<template>
    <div class="conteiner">
        <HeaderContactBook />
        <div class="addContact">
            <form action="">
                <label>Nome:</label>
                <br>
                <input v-model="contactData.name" type="text">
                <br>
                <label>Telefone:</label>
                <br>
                <input v-model="contactData.phoneNumber" type="text" placeholder=" (DD)91234-5678 ou (DD)912345678">
                <br>
                <label>Email:</label>
                <br>
                <input v-model="contactData.email" type="text" placeholder=" usuario@dominio.com">
                <br><br>
            
                    <button @click="createNewContact" >ADICIONAR</button>
            </form>
        </div>
        
    </div>
</template>
<style>
    .addContact{
        background-color: rgb(12, 12, 75);
        color: white;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        text-align: center;
        background-color: rgb(12, 12, 75);
        padding: 30px;
        border-radius: 50px;
        width: 40%;
        position:fixed;
        top: 380px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    button{
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
    }

    button:hover{
        background-color: rgb(202, 174, 13);
        transition: 0.5s;
    }

    input{
        background-color: rgb(3, 3, 45);
        color: white;
        border: white;
        height: 30px;
        width: 60%;
    }

    label{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
</style>