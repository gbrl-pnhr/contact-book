<script setup lang="ts">
    import HeaderContactBook from './headerContactBook.vue';
</script>

<template>
    <div class="conteinerDetail">
        <HeaderContactBook />
        <div id="details">
            <ul>
                <li>Nome: Danilo Ribeiro Alencar</li>
                <li>Número: (88)9823443777</li>
                <li>Email: danilo123@gmail.com</li>
            </ul>
        </div>
    </div>
</template>

<style>
    #details{
      background-color: rgb(12, 12, 75);
      color: white;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 20px;
      text-align: center;
      background-color: rgb(12, 12, 75);
      padding: 50px;
      border-radius: 50px;
      width: 40%;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
</style>