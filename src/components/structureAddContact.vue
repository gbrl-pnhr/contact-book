<script setup lang="ts">
    import headerContactBook from '@/components/headerContactBook.vue';
</script>
<template>
    <div class="conteiner">
        <headerContactBook />
        <div class="addContact">
            <h3>Name:</h3>
            <input type="text">
            <h3>Number:</h3>
            <input type="text">
            <h3>Email:</h3>
            <input type="text"><br><br>
            <button>ADICIONAR</button>
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
    
</style>
