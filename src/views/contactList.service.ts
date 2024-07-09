import { BehaviorSubject, Observable, take } from "rxjs";
import { ContactsRest } from "@/services/rest/contacts.rest";
export class ContactListService {
    constructor(private _contact = new ContactsRest()) { }

    private contact$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    contact: Observable<any> = this.contact$.asObservable();

    getContacts() {
        this._contact.getContacts()
            .pipe()
            .subscribe({
                next: (response: any) => {
                    this.contact$.next(response);
                    console.log("Deu certo pegar todos os contatos {getContacts()}")
                },
                error: () => {
                    console.log("Deu erro em pegar todos os contatos {getContacts()}")
                }
            });
    }

    getContact(id: string | string[]) {
        this._contact.getContact(id)
            .pipe(take(1))
            .subscribe({
                next: (response: any) => {
                    this.contact$.next(response);
                    console.log("Deu certo em pegar um contato {getContact()}");
                },
                error: () => {
                    console.log("Deu erro em pegar um contato {getContact()}");
                }
            });
    }

    postNewContact(newContact: object) {
        this._contact.postContact(newContact)
            .pipe()
            .subscribe({
                next: () => {
                    console.log("Deu certo o post");
                },
                error: () => {
                    console.log("Deu erro no post");
                }
            });
    }

    deleteContact(id: string | string[]) {
        this._contact.deleteContact(id)
        .pipe()
        .subscribe({
            next: () => {
                console.log("Deu certo fazer o delete do contato");
            },
            error: () => {
                console.log("Deu errado fazer o delete do contato");
            }
        })
    }

    editContact(id: string | string[], editContact: object) {
        this._contact.putContact(id, editContact)
        .pipe()
        .subscribe({
            next: () => {
                console.log("Deu certo fazer a edição do contato");
            },
            error: () => {
                console.log("Deu errado fazer a edição do contato");
            }
        })
    }
}