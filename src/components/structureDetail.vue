<script lang="ts">
import type { contactBook } from '@/services/contacts/typesContacts';
import HeaderContactBook from './headerContactBook.vue';
import axios from 'axios';

export default{
    data(){
        return{
            contacts: [] as contactBook[]
        }
    },
    mounted(){
         axios.get('/api/contacBook')
             .then(response => this.contacts = response.data)
    },
    components:{
        HeaderContactBook
    },
    computed:{
        contactId(){
            return this.$route.params.id;
        },
        findContact(){
            return this.contacts.find((contacts: { id: string; }) => contacts.id === this.contactId);        
        }     
    }
}
</script>

<template>
    <div class="conteinerDetail">
        <HeaderContactBook />
        <div id="details">
            <ul>
                <li>Nome: {{ findContact?.name }}</li>
                <br>
                <li>Número: {{findContact?.phoneNumber }}</li>
                <br>
                <li>Email: {{findContact?.email }}</li>
            </ul>
        </div>
    </div>
</template>

<style>
    #details{
      background-color: rgb(12, 12, 75);
      color: white;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 20px;
      text-align: center;
      background-color: rgb(12, 12, 75);
      padding: 50px;
      border-radius: 50px;
      width: 40%;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
</style>