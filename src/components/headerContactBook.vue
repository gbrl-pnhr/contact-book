<template>
    <header>
        <div class="home">
            <h1 id="contactBook">Agenda</h1>
        </div>
        <div class="home">
            <nav class="homeLink">
                <RouterLink to="/">Home</RouterLink>
            </nav>
            <nav class="homeLink">
                <RouterLink to="/addcontact">Adicionar Contato</RouterLink>
            </nav>
        </div>
    </header>
</template>

<style>
.home {
    background-color: rgb(12, 12, 75);
}

.homeLink {
    background-color: rgb(12, 12, 75);
    padding-left: 15px;
    padding-bottom: 10px;
    display: inline-block;
}
</style>