import api from "../rxjs";

export class ContactsRest{
    getContact(){
        return api.get("/contacBook");
    }
}

