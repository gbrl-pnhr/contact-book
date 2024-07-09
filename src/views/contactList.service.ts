import { BehaviorSubject, Observable, take } from "rxjs";
import { ContactsRest } from "@/services/rest/contacts.rest";
import { Alerts } from "@/util/alerts.util";

export class ContactListService {
    constructor(
        private _contact = new ContactsRest(),
        private _alertsMethods = Alerts,
    ) { }

    private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    contact: Observable<any> = this.contact$.asObservable();

    getContacts() {
        this._contact.getContacts()
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.contact$.next(response);
                },
                error: () => {
                    alert(this._alertsMethods.ALERT_GET_ALL_ERROR);
                }
            });
    }

    getContact(id: string | string[]) {
        this._contact.getContact(id)
            .pipe(take(1))
            .subscribe({
                next: (response: any) => {
                    this.contact$.next(response);
                },
                error: () => {
                    alert(this._alertsMethods.ALERT_GET_ERROR);
                }
            });
    }

    postNewContact(newContact: object) {
        this._contact.postContact(newContact)
            .pipe()
            .subscribe({
                next: () => {
                    alert(this._alertsMethods.ALERT_POST_SUCESS);
                },
                error: () => {
                    alert(this._alertsMethods.ALERT_GET_ERROR);
                }
            });
    }

    deleteContact(id: string | string[]) {
        this._contact.deleteContact(id)
        .pipe()
        .subscribe({
            next: () => {
                alert(this._alertsMethods.ALERT_DELETE_SUCESS);
            },
            error: () => {
                alert(this._alertsMethods.ALERT_DELETE_ERROR);
            }
        })
    }

    editContact(id: string | string[], editContact: object) {
        this._contact.putContact(id, editContact)
        .pipe()
        .subscribe({
            next: () => {
                alert(this._alertsMethods.ALERT_EDIT_SUCESS);
            },
            error: () => {
                alert(this._alertsMethods.ALERT_EDIT_ERROR);
            }
        })
    }
}