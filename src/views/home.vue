<script lang="ts">

</script>

<template>
    <div class="conteinerHome">
        <header-contact-book/>
        <div class="blockContacts">
            <show-contacts/>
        </div>
    </div>
</template>

<style>
  #contactBook {
      font-family: 'Courier New', Courier, monospace;
      color: rgb(255, 255, 255);
      font-size: 60px;
      padding: 10px;
      margin: 0px
  }

  li {
      list-style: none;
  }

  .contact {
      background-color: rgb(12, 12, 75);
      padding: 50px;
      margin-top: 0px;
      margin-right: 1px;
      border-radius: 50px;
      text-align: center;
      width: 300px;
  }

  .blockContacts {
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

  a {
      text-decoration: none;
      color: rgb(255, 255, 255);
      transition: 0.4s;
      padding: 0px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: 20px;
  }

  a:hover {
      color: rgb(202, 174, 13);
      transition: 0.2s;
  }
</style>