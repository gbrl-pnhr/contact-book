import api from "../rxjs";

export class ContactsRest{
    getContact(){
        return api.get("/contacBook");
    }

    postContact(newContact: object){
        api.post("/contacBook",newContact).pipe().subscribe(() => { newContact });
    }
}

