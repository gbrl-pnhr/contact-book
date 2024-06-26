import http from '../api';
import type { APIResponse } from '../type';
import type { contactBook, InputCreateContact } from './typesContacts';

async function getContacts() {
    return await http.get<APIResponse<contactBook[]>>("contact");
}

async function createContacts(input:InputCreateContact) {
    return await http.post<APIResponse<contactBook[]>>("contact", input);
}

export default{
    getContacts,
    createContacts,
};