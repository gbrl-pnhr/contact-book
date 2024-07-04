<script lang="ts">
import { RouterLink } from 'vue-router';
import { ContactBook } from '@/services/contacts/typesContacts';
import { ContactListService } from '@/services/contacts/contactList.service';

export default{
    data(){
        return{
            contacts: [] as ContactBook[]
        }
    },
    mounted(){
        this.getContact()
    },
    computed:{
        service(){
            return new ContactListService();
        }
    },
    methods:{
        getContact(){
            // axios.get('/api') //'https://6674787a75872d0e0a968ff7.mockapi.io/api/v1
            // .then(response => this.contacts = response.data)
            this.service.data.pipe().subscribe({next:(response) => this.contacts = response})
            this.service.showContactsList()
        }
    }
}
</script>

<template>
    <div>
        <RouterLink v-for="contact in contacts" :key="contact.id" :to="`/detailscontact/${contact.id}`">
            <div class="contact">
                {{ contact.name }} <br>
            </div><br>
        </RouterLink>
    </div>
</template>