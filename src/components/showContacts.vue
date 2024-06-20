<script>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router';
import structureAddContact from './structureAddContact.vue';

export default{
    components:{
        structureAddContact
    },
    data(){
        return{
            contactsList: sourceData.contacts,
            newContact:{}
        }
    },
    methods:{
        createdNewContact(){
            this.contactsList.push({
                name: this.newContact.name,
                id: this.newContact.id,
                numberContact: this.newContact.phone,
                email: this
            })
        }
    }
}
</script>

<template>
    <structureAddContact @response="(contactData) => newContact = contactData" />
    <div>
        <RouterLink v-for="contact in contactsList" :key="contact.name" to="/detailscontact">
            <div class="contact">
                {{ contact.name }}
            </div><br>
        </RouterLink>
    </div>
</template>