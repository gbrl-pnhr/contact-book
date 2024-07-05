<script lang="ts">
import type { ContactBook } from '@/services/contacts/typesContacts';
import HeaderContactBook from './headerContactBook.vue';
import { ContactListService } from '@/services/contacts/contactList.service';

export default{
    data(){
        return{
            contactData: {
                name: "",
                id: 0,
                phoneNumber: "",
                email: ""
            },
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
    <div class="conteiner">
        <HeaderContactBook />
    
        <div class="addContact">
            <form action="">
                <label>Nome:</label>
                <br>
                <input :value="findContact?.name" type="text">
                <br><br>
                <label>Telefone:</label>
                <br>
                <input :value="findContact?.phoneNumber" type="text" placeholder=" (DD)91234-5678 ou (DD)912345678">
                <br><br>
                <label>Email:</label>
                <br>
                <input :value="findContact?.email" type="text" placeholder=" usuario@dominio.com">
                <br><br>
            
                <RouterLink to = "/" >
                    <button>EDITAR</button>
                </RouterLink>
            </form>
        </div>

    </div>
</template>
