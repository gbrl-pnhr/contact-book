import api from "../rxjs";

export class ContactsRest{
    getContact(){
        return api.get("/contacBook");
    }

    postContact(newContact: object){
        api.post("/contacBook",newContact).pipe().subscribe(() => { newContact });
    }

    deleteContact(contactId: string | string[]){
        api.delete(`/contacBook/${contactId}`).pipe().subscribe(() => { contactId });
    }

    putContact(contactId: string | string[], editContact: object){
        api.put(`/contacBook/${contactId}`, editContact).pipe().subscribe(() => { editContact });
    }
}
