import axios from 'axios';
import { render } from 'vue';

axios.get('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(function(){
    
  });


  const post = () =>{
    const data ={
      id:0,
      name: '',
      phoneNumber:'',
      email:'',

    };
    axios.post('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
    .finally(function(){
      
    });
  }

  const put = () => {
    const data = {
      id:0,
      name: '',
      phoneNumber:'',
      email:'',
    };

    axios.put('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook/${data.id}', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error(error)
    })
    .finally(function(){
      
    });
  }
const patch = () =>{
  const data = {
    id:0,
    name: '',
    phoneNumber:'',
    email:'',
  };

  axios.put('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook/${data.id}', data)
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(function(){
    
  });
}

const del = ()=> {
  axios.delete('https://6674787a75872d0e0a968ff7.mockapi.io/api/v1/contacBook/${data.id}')
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })
  .finally(function(){
    
  });
}
 
  
  