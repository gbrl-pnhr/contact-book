<script setup lang="ts">
 // import structureHome from './components/structureHome.vue';
 import axios from 'axios';

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
  <RouterView/>
  
  <!--<structureHome />-->
</template>


