<script lang="ts">
  import structureHome from '@/components/structureHome.vue';
  import axios from 'axios';


  export default{
    components:{
      structureHome
    }
  }

axios.get('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(function(){
    
  });
</script>

<template>
  <structureHome />
</template>


<style>
  a{
      text-decoration: none;
      color: rgb(255, 255, 255);
      transition: 0.4s;
      padding: 0px;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 20px;
    }

    a:hover{
      color: rgb(202, 174, 13);
      transition: 0.2s;

    }
    
</style>