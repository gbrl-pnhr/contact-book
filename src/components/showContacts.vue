<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default{
    methods: {
        get(){
            axios.get('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook')
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(function(){
            
            })
        }
    }
}
</script>

<template>
    {{ get }}
    <div>
        <RouterLink v-for="contact in contactsList" :key="contact.id" :to="`/detailscontact/${contact.id}`">
            <div class="contact">
                {{ contact.name }}
            </div><br>
        </RouterLink>
    </div>
</template>