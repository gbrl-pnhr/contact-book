<script>
import sourceData from '@/data.json'
import { RouterLink } from 'vue-router';

export default{
    data(){
        return{
            contactsList: sourceData.contacts
        }
    }
}
</script>

<template>
    <div>
        <RouterLink v-for="contact in contactsList" :key="contact.id" :to="`/detailscontact/${contact.id}`">
            <div class="contact">
                {{ contact.name }}
            </div><br>
        </RouterLink>
    </div>
</template>