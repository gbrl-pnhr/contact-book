<script>
import { RouterLink } from 'vue-router';
import axios from 'axios'; 

export default{
    data(){
        return{
            contacts: []
        }
    },
    mounted(){
        axios.get('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook')
            .then(response => this.contacts = response.data)
    }
}
</script>

<template>
    <div>
        <RouterLink v-for="contact in contacts" :key="contact.id">
            <div class="contact">
                <p>{{ contact.name }}</p>
            </div><br>
        </RouterLink>
    </div>
</template>