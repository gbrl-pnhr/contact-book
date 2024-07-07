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
            contacts: [] as ContactBook[]
        }
    },
    mounted(){
        this.service.data.pipe().subscribe({
            next: (response: ContactBook[]) => {
                this.contacts = response;
                this.transferContacts()
            }
        });
        this.service.showContactsList();
    },
    components:{
        HeaderContactBook
    },

    methods:{
        transferContacts() {
            const index = this.findIndex;
            if (index !== -1) {
                this.contactData = { ...this.contacts[index] };
            }
        },
        
        editContact(){
           if(this.verifyInputs(this.contactData.phoneNumber, this.contactData.email)){
                this.service.editContact(this.contactId, this.contactData);
            }else{
                alert("Por favor, preencha todos os campos corretamente");
            } 
        },

        verifyInputs(phone: string, email: string){
            if(phone === '' || email === ''){
                return false;
            }else{
                if(this.validateEmail(email) && this.validatePhone(phone)){
                    return true;
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
    },

    computed:{
        contactId(){
            return this.$route.params.id;
        },
        findIndex(){
            return this.contacts.findIndex((contacts) => contacts.id === this.contactId);
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