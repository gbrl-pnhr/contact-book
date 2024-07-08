<script lang="ts">
import type { ContactBook } from '@/services/contacts/typesContacts';
import HeaderContactBook from './headerContactBook.vue';
import { ContactListService } from '@/services/contacts/contactList.service';

export default{
    data(){
        return{
            contactData: {
                id:"",
                name:"",
                phoneNumber:"",
                email:"",
            } as ContactBook,
        }
    },
    mounted(){
        this.service.data.pipe().subscribe({next:(response) => this.contactData = response});
        this.service.showContact(this.$route.params.id);
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
        deleteContact(){
            this.service.deleteContact(this.$route.params.id);
        }
    }
}
</script>

<template>
    <div class="conteinerDetail">
        <HeaderContactBook />
        <div id="details">
            <ul>
                <li>Nome: {{ contactData.name }}</li>
                <br>
                <li>Número: {{ contactData.phoneNumber }}</li>
                <br>
                <li>Email: {{ contactData.email }}</li>
            </ul>
            <div>
                <RouterLink :to = "`/`" >
                    <button @click="deleteContact" >DELETAR</button>
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