<template>
    <div class="conteiner">
        <div class="home">
            <h1>HOME</h1>
        </div>

        <div class="blockContacts">
          <div class="contact">
                <nav>
                  <RouterLink to = "/about">LIONEL MESSI</RouterLink>
                </nav>
          </div>
        
  
          <div class="contact">
                <nav>
                  <RouterLink to = "/about">GABRIEL PINHEIRO</RouterLink>
                </nav>
          </div>
        
  
        
          <div class="contact">
                <nav class="link">
                  <RouterLink to = "/about">VICTOR TIMBÓ</RouterLink>
                </nav>
          </div>
        </div>
  
      
    </div>
  </template>
  
  <style>
    h1{
        font-family: 'Courier New', Courier, monospace;
        color: green;
        font-size: 100px;
        padding: 1px;
        margin: 0px
    }
    
    li{
      list-style: none;
    }
  
    .contact{
      background-color: red;
      padding: 100px;
      padding-left: 50px;
      margin-top: 50px;
      margin-right: 1000px;
      border-radius: 10px;
      text-decoration: none;
    }

    nav{
        font-family: 'Courier New', Courier, monospace;
    }
    
  </style>