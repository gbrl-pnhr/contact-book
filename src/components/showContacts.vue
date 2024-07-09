<script lang="ts">
import { RouterLink } from 'vue-router';
import type { ContactBook } from '@/services/contacts/typesContacts';
import { ContactListService } from '@/services/contacts/contactList.service';

export default{
    data(){
        return{
            contacts: [] as ContactBook[]
        }
    },
    mounted(){
        this.getContacts();
    },
    computed:{
        service(){
            return new ContactListService();
        }
    },
    methods:{
        getContacts(){
            this.service.contact.pipe().subscribe({next:(response) => this.contacts = response});
            this.service.getContacts();
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