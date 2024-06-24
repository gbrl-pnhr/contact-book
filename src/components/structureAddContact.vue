<script lang="ts">
import HeaderContactBook from './headerContactBook.vue';
import sourceData from '@/data.json'

export default{
    data(){
        return{
            contactData: {
                name: "",
                id: 0,
                numberContact: "",
                email: ""
            },
            contactsList: sourceData.contacts
        }
    },
    components:{
        HeaderContactBook
    },
    methods:{
        createNewContact(){
            if(this.verifyInputs(this.contactData.name, this.contactData.numberContact, this.contactData.email)){
                this.contactData.id = parseInt(this.contactsList[this.contactsList.length-1].id) + 1;
                this.contactsList.push({
                    name: this.contactData.name,
                    id: this.contactData.id.toString(),
                    numberContact: this.contactData.numberContact,
                    email: this.contactData.email
                });       
            }else{
                alert("Por favor, preencha todos os campos corretamente");
            } 
        },
        verifyInputs(name: string, phone: string, email: string){
            if(name === '' || phone === '' || email === ''){
                return false;
            }else{
                if(this.validateEmail(email) && this.validateName(name) && this.validatePhone(phone)){
                    return true
                }else{
                    return false;
                }
                
            }
        },
        validateEmail(email: string){
            if(email.includes('@')){
                let validateEmail = email.split('@');
                let validateDominion = validateEmail[1].split('.');
                if(email.includes(' ') || validateEmail[0].length === 0 || validateDominion.length < 2 || validateDominion[0].length === 0 || validateDominion[1] !== "com"){
                    return false;
                }else{
                    return true;
                }
            }else{
                return false;
            }
        },
        validatePhone(phone: string){
            let verifyPhone = new RegExp('^\\([1-9]{2}\\)((9[0-9]{4}-[0-9]{4})|9[0-9]{8})$');
            if(verifyPhone.test(phone)){
                return true;
            }else{
                return false;
            }
        },
        validateName(name: string){
            let countValidCaracter = 0
            for(let id = 0; id < name.length; id++){
                if(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','ç',' '].includes(name[id].toLowerCase())){
                    countValidCaracter++;
                    if(countValidCaracter === name.length){
                        return true;
                    }
                }else{
                    return false;
                }   
            }
        }
    }
}
</script>

<template>
    <div class="conteiner">
        <HeaderContactBook />
        <div class="addContact">
            <form action="">
                <label>Nome:</label>
                <br>
                <input v-model="contactData.name" type="text">
                <br>
                <label>Telefone:</label>
                <br>
                <input v-model="contactData.numberContact" type="text" placeholder=" (DD)91234-5678 ou (DD)912345678">
                <br>
                <label>Email:</label>
                <br>
                <input v-model="contactData.email" type="text" placeholder=" usuario@dominio.com">
                <br><br>
            
                <RouterLink to = "/" >
                    <button @click="createNewContact" >ADICIONAR</button>
                </RouterLink>
            </form>
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

    label{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    
</style>
