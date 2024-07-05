<script lang="ts">
import type { ContactBook } from '@/services/contacts/typesContacts';
import HeaderContactBook from './headerContactBook.vue';
import { ContactListService } from '@/services/contacts/contactList.service';

export default{
    data(){
        return{
            contacts: [] as ContactBook[]
        }
    },
    mounted(){
        this.service.data.pipe().subscribe({next:(response) => this.contacts = response});
        this.service.showContactsList();
    },
    components:{
        HeaderContactBook
    },
    computed:{
        contactId(){
            return this.$route.params.id;
        },
        findContact(){
            return this.contacts.find((contacts) => contacts.id === this.contactId);      
        },
        service(){
            return new ContactListService();
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
            <div>
                <RouterLink to = "/" >
                    <button @click="" >DELETAR</button>
                </RouterLink>
                <RouterLink :to = "`/editcontact/${$route.params.id}`" >
                    <button @click="" >EDITAR</button>
                </RouterLink>
            </div>
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