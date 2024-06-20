<script lang="ts">
import HeaderContactBook from './headerContactBook.vue';

export default{
    data(){
        return{
            contactData: {
            name: '',
            id: 0,
            phone: '',
            email: ''
            },
            newId: 2
        }
    },
    components:{
        HeaderContactBook
    },
    emits:['response'],
    created() {
        this.$emit('response','contactData')
    },
    methods:{
        incrementId(){
            this.newId++;
            this.contactData.id = this.newId;
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
                <input @input="contactData.name" type="text">
                <br>
                <label>Telefone:</label>
                <br>
                <input @input="contactData.phone" type="text">
                <br>
                <label>Email:</label>
                <br>
                <input @input="contactData.email" type="text">
                <br><br>
                <button @click="incrementId" to="/">ADICIONAR</button>
            </form>
        </div>
        
    </div>
</template>
<style>
    .addContact{
        background-color: rgb(12, 12, 75);
        color: white;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        text-align: center;
        background-color: rgb(12, 12, 75);
        padding: 30px;
        border-radius: 50px;
        width: 40%;
        position:fixed;
        top: 380px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    button{
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
    }

    button:hover{
        background-color: rgb(202, 174, 13);
        transition: 0.5s;
    }

    input{
        background-color: rgb(3, 3, 45);
        color: white;
        border: white;
        height: 30px;
        width: 60%;
    }

    label{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
</style>
