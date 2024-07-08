<script lang="ts">
 import HeaderContactBook from './headerContactBook.vue';
 import showContacts from './showContacts.vue';

 export default{
  components:{
    HeaderContactBook,
    showContacts
  }
 }
</script>

<template>
    <div class="conteinerHome">
        <HeaderContactBook/>
        <div class="blockContacts">
          <showContacts/>
        </div>  
    </div>
</template> 
  <style>

    #contactBook{
        font-family: 'Courier New', Courier, monospace;
        color: rgb(255, 255, 255);
        font-size: 60px;
        padding: 10px;
        margin: 0px
    }
    
    li{
      list-style: none;
    }
  
    .contact{
      background-color: rgb(12, 12, 75);
      padding: 50px;
      margin-top: 0px;
      margin-right: 1px;
      border-radius: 50px;
      text-align: center;
      width: 300px;
    }

    .blockContacts{
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      width: 40%;
      height: 390px;
      background-color: rgb(3, 3, 45);
      padding: 50px;
      border-radius: 30px;
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow-y: scroll;
    }
  </style>