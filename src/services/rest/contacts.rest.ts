import api from "../rxjs";

export class ContactsRest {
    getContacts() {
        return api.get("/contacBook");
    }

    getContact(contactId: string | string[]) {
        return api.get(`/contacBook/${contactId}`);
    }

    postContact(newContact: object) {
        return api.post("/contacBook", newContact)
    }

    deleteContact(contactId: string | string[]) {
        return api.delete(`/contacBook/${contactId}`);
    }

    putContact(contactId: string | string[], editContact: object) {
        return api.put(`/contacBook/${contactId}`, editContact);
    }
}

