<script lang="ts">
import type { ContactBook } from '@/services/contacts/typesContacts';
import { ContactListService } from '@/views/contactList.service';
import { VerifyContactInputs } from '@/util/verifyInputs.util';


export default{
    data(){
        return{
            contactData: {} as ContactBook,
        }
    },
    mounted(){
        this.service.contact.pipe().subscribe({
            next: (response: ContactBook) => {
                this.contactData = response;
            }
        });
        this.service.getContact(this.$route.params.id);
    },
    methods:{
        editContact() {
           if(this.serviceVerifyContact.verifyInputs(this.contactData.phoneNumber, this.contactData.email, this.contactData.name)){
                this.service.editContact(this.$route.params.id, this.contactData);
            } 
        }
    },
    computed:{
        service(): ContactListService {
            return new ContactListService();
        },
        serviceVerifyContact(): VerifyContactInputs {
            return new VerifyContactInputs();
        }  
    }
}
</script>

<template>
    <div class="conteiner">
        <header-contact-book />
    
        <div class="inputContact">
            <form @submit.prevent="editContact">
                <label>Nome:</label>
                <br>
                <input v-model = "contactData.name" type="text">
                <br><br>
                <label>Telefone:</label>
                <br>
                <input v-model = "contactData.phoneNumber" type="text" placeholder=" (DD)91234-5678 ou (DD)912345678">
                <br><br>
                <label>Email:</label>
                <br>
                <input v-model = "contactData.email" type="text" placeholder=" usuario@dominio.com">
                <br><br>
            
                <RouterLink to = "/" >
                    <button @click = "editContact">EDITAR</button>
                </RouterLink>
            </form>
        </div>

    </div>
</template>