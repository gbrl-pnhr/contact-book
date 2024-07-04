import api from "./rxjs";

class getContact{
    getContact(id:string){
        return api.get(`/${id}`)
    }
}