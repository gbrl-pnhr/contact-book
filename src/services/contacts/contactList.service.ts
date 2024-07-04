import { BehaviorSubject, Observable, take } from "rxjs";
import { ContactsRest } from "../rest/contacts.rest";

export class ContactListService {
    constructor(private _data = new ContactsRest()){}

    
    private data$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    
    data: Observable<any> = this.data$.asObservable();

    showContactsList() {
        this._data.getContact().pipe().subscribe({
            next: (response: any) => { 
                this.data$.next(response);
            }
        });
    }

    addNewContact(newContact: object){
        this._data.postContact(newContact);
    }
}