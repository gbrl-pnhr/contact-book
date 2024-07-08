<script lang="ts">
import type { ContactBook } from '@/services/contacts/typesContacts';
import HeaderContactBook from './headerContactBook.vue';
import { ContactListService } from '@/services/contacts/contactList.service';
import verifyInputs from '@/util/verifyInputs.util';


export default{
    data(){
        return{
            contactData: {
                name:'',
                id: 0,
                phoneNumber: "",
                email: ""
            },
            contacts: [] as ContactBook[]
        }
    },
    mounted(){
        this.service.data.pipe().subscribe({next: (response) => this.contacts = response});
        this.service.showContactsList();
    },    
    components:{
        HeaderContactBook
    },
    computed:{
        service(){
            return new ContactListService();
        }
    },
    methods:{
        createNewContact(){
            if(verifyInputs(this.contactData.phoneNumber, this.contactData.email)){
                this.contactData.id = (this.contactData.id + 1);
                this.service.addNewContact(this.contactData);
            }else{
                alert("Por favor, preencha todos os campos corretamente");
            } 
        }
    }
}
</script>

<template>
    <div class="conteiner">
        <HeaderContactBook />
        
        <div class="inputContact">
            <form action="">
                <label>Nome:</label>
                <br>
                <input v-model="contactData.name" type="text">
                <br><br>
                <label>Telefone:</label>
                <br>
                <input v-model="contactData.phoneNumber" type="text" placeholder=" (DD)91234-5678 ou (DD)912345678">
                <br><br>
                <label>Email:</label>
                <br>
                <input v-model="contactData.email" type="text" placeholder=" usuario@dominio.com">
                <br><br>
            
                <RouterLink to = "/" >
                    <button @click="createNewContact" >ADICIONAR</button>
                </RouterLink>
            </form>
        </div>
        
    </div>
</template>
<style>
    .inputContact{
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
        padding: 10px 16px;
        margin: 8px 32px 0px 32px;
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