<script lang="ts">
import { RouterLink } from 'vue-router';
import axios from 'axios'; 
import type { contactBook } from '@/services/contacts/typesContacts';


export default{
    data(){
        return{
            contacts: [] as contactBook[]
        }
    },
    mounted(){
        this.getContact()
    },
    methods:{
        getContact(){
            axios.get('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook')
            .then(response => this.contacts = response.data)

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