import api from "../rxjs";

export class ContactsRest {
    getContacts() {
        return api.get("/contacBook");
    }

    getContact(contactId: string | string[]) {
        return api.get(`/contacBook/${ contactId }`);
    }

    postContact(newContact: object) {
        api.post("/contacBook", newContact).pipe().subscribe(() => { newContact });
    }

    deleteContact(contactId: string | string[]) {
        api.delete(`/contacBook/${ contactId }`).pipe().subscribe(() => { contactId });
    }

    putContact(contactId: string | string[], editContact: object) {
        api.put(`/contacBook/${ contactId }`, editContact).pipe().subscribe(() => { editContact });
    }
}

