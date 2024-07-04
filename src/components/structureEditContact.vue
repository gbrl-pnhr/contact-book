<script lang="ts">
import HeaderContactBook from './headerContactBook.vue';

export default{
    components:{
        HeaderContactBook
    }
}

</script>

<template>
    <div class="conteiner">
        <HeaderContactBook />
    </div>

    <div class="addContact">
            <form action="">
                <label>Nome:</label>
                <br>
                <input  type="text">
                <br>
                <label>Telefone:</label>
                <br>
                <input type="text" placeholder=" (DD)91234-5678 ou (DD)912345678">
                <br>
                <label>Email:</label>
                <br>
                <input type="text" placeholder=" usuario@dominio.com">
                <br><br>
            
                <RouterLink to = "/" >
                    <button>EDITAR</button>
                </RouterLink>
            </form>
        </div>
</template>
