<template>
    <header>
        <div class="home">
            <h1 id="contactBook">Agenda</h1>
        </div>
        <div>
            <nav id="homeLink">
            <RouterLink to = "/">Home</RouterLink>
            &nbsp &nbsp
            <RouterLink to = "/addcontact">Adicionar Contato</RouterLink>
           <!-- &nbsp &nbsp
            <RouterLink to = "/editcontact">Editar Contato</RouterLink> -->
            </nav>
        </div>
    </header>
</template>

<style>
    .home{
      background-color: rgb(12, 12, 75);
    }

    #homeLink{
      background-color: rgb(12, 12, 75);
      padding-left: 10px;
      padding-bottom: 10px;
      margin-bottom: 5px;
    }
</style>