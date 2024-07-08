import { BehaviorSubject, Observable, take } from "rxjs";
import { ContactsRest } from "../rest/contacts.rest";

export class ContactListService {
    constructor(private _data = new ContactsRest()){}

    
    private data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    
    data: Observable<any> = this.data$.asObservable();

    showContactsList() {
        this._data.getContacts().pipe().subscribe({
            next: (response: any) => { 
                this.data$.next(response);
            }
        });
    }

    showContact(id: string | string[]){
        this._data.getContact(id).pipe(take(1)).subscribe({
            next: (response: any) => { 
                this.data$.next(response);
            }
        });
    }

    addNewContact(newContact: object){
        this._data.postContact(newContact);
    }

    deleteContact(id: string | string[]){
        this._data.deleteContact(id)
    }

    editContact(id: string | string[], editContact: object){
        this._data.putContact(id, editContact)
    }
}